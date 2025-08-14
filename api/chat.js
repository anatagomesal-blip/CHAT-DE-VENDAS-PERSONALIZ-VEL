export default function handler(req, res) {
    const { message } = req.body;
    // Aqui você chamaria a API de IA real
    const response = `Resposta da IA para: ${message}`;
    res.status(200).json({ reply: response });
}
