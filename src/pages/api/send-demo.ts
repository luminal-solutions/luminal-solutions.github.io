import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD ? "OK" : "FALTANDO");
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone, company, message } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message || !emailRegex.test(email)) {
    console.error("Campos obrigatórios ausentes ou inválidos");
    return res.status(400).json({ error: "Por favor, preencha todos os campos obrigatórios com informações válidas." });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "luminalcontato@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.verify();
    console.log("SMTP Connection verified successfully.");
  } catch (err) {
    console.error("SMTP Connection verification failed:", err);
    return res.status(500).json({ error: "Failed to connect to email server." });
  }

  try {
    await transporter.sendMail({
      from: "Luminal Site <luminalcontato@gmail.com>",
      to: "luminalcontato@gmail.com",
      replyTo: email,
      subject: "Nova Solicitação de Demonstração",
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Celular:</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: "E-mail enviado com sucesso." });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    res.status(500).json({ error: "Erro ao enviar e-mail." });
  }
}
