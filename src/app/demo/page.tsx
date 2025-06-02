"use client";

import { useState } from "react";
import Head from "next/head";

export default function DemoRequestPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/send-demo", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Fale Conosco | Luminal Solutions</title>
      </Head>

      <div className="min-h-screen bg-[#0A0F1C] text-white flex items-center justify-center px-4 py-12">
        <div className="bg-white text-black p-10 rounded-2xl shadow-xl w-full max-w-xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Fale Conosco
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CAFFF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CAFFF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Empresa (opcional)</label>
              <input
                type="text"
                name="company"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CAFFF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Conte-nos um pouco sobre sua necessidade..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CAFFF]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-[#FFE566] to-[#3F87F5] text-black hover:opacity-90 transition"
            >
              Enviar mensagem
            </button>

            {status === "success" && (
              <p className="text-center text-green-600 mt-3 font-medium">
                Solicitação enviada com sucesso!
              </p>
            )}

            {status === "error" && (
              <p className="text-center text-red-600 mt-3 font-medium">
                Algo deu errado. Tente novamente.
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
