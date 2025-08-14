import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Mensagem vazia" });
    }

    // Pega a API Key do Render
    const apiKey = process.env.GEMINI_API_KEY;

    // Exemplo de requisição para a API de IA
    try {
        const response = await fetch("https://api.gemini.example.com/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: message,
                max_tokens: 150
            })
        });

        const data = await response.json();

        // Envia a resposta da IA para o front-end
        res.status(200).json({ reply: data.text || "Sem resposta" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ reply: "Erro ao consultar a IA" });
    }
}
