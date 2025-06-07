import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD ? "OK" : "FALTANDO");
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone, company, message } = req.body;

  if (!name || !email || !message) {
    console.error("Campos obrigatórios ausentes");
    return res.status(400).json({ error: "Campos obrigatórios ausentes." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "contato@luminalsolutions.com.br",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: "Luminal Site <contato@luminalsolutions.com.br>",
      to: "contato@luminalsolutions.com.br",
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
