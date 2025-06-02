"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "A Luminal atende empresas de qual porte?",
    answer:
      "Atendemos desde pequenos negócios até empresas em escala nacional. Nossas soluções são personalizadas de acordo com a realidade e os objetivos de cada cliente.",
  },
  {
    question: "Os projetos são desenvolvidos sob medida?",
    answer:
      "Sim. Cada solução é pensada com base nas necessidades específicas de cada cliente, combinando estratégia, tecnologia e performance.",
  },
  {
    question: "Quais tipos de soluções vocês desenvolvem?",
    answer:
      "Desenvolvemos plataformas personalizadas para web, mobile e sistemas internos. Nossos projetos são pensados para atender de forma eficaz diferentes contextos e canais.",
  },
  {
    question: "A Luminal oferece suporte após a entrega?",
    answer:
      "Sim. Oferecemos planos de suporte e acompanhamento contínuo para garantir o funcionamento ideal da solução implementada.",
  },
  {
    question: "Como funciona o início de um projeto com a Luminal?",
    answer:
      "Começamos com uma imersão no seu negócio, seguido de proposta técnica e cronograma. Só então iniciamos o desenvolvimento com total transparência e alinhamento.",
  },
];
