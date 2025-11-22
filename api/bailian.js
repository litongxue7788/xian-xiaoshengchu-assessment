export default async function handler(req, res) {
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, model = 'qwen-turbo', apiKey, appId } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // 验证前端传递的API信息
    if (!apiKey || !appId) {
      return res.status(400).json({ 
        error: 'API configuration required',
        message: '请配置API Key和App ID'
      });
    }

    console.log('通过代理调用百炼API...');
    
    const response = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'X-DashScope-AppId': appId
      },
      body: JSON.stringify({
        model: model,
        input: {
          messages: [
            {
              role: 'system',
              content: '你是专业的小升初咨询顾问，为西安地区学生和家长提供升学指导。回答要准确、专业、有用，控制在300字以内。'
            },
            {
              role: 'user',
              content: prompt
            }
          ]
        },
        parameters: {
          temperature: 0.7,
          max_tokens: 1000,
          top_p: 0.8
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('百炼API错误:', response.status, errorText);
      return res.status(response.status).json({ 
        error: `API请求失败: ${response.status}`,
        details: errorText
      });
    }

    const data = await response.json();
    console.log('百炼API响应:', data);
    
    res.status(200).json({
      success: true,
      data: data
    });

  } catch (error) {
    console.error('服务器错误:', error);
    res.status(500).json({ 
      error: '内部服务器错误',
      message: error.message 
    });
  }
}
