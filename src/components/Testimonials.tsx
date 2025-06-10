import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              A <Mark>Luminal</Mark> foi essencial na nossa transformação digital.
              Eles entenderam exatamente o que precisávamos e entregaram muito além do esperado.
            </p>

            <Avatar
              name="Ana Lívia"
              title="Diretora de Operações na Conecta Saúde"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              A equipe trouxe uma solução <Mark>sob medida</Mark> e nos ajudou a automatizar processos internos
              com agilidade e profissionalismo.
            </p>

            <Avatar
              name="Pedro Augusto"
              title="Coordenador de Projetos na UpTech"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Excelente parceria! A <Mark>entrega técnica</Mark> foi impecável e o atendimento próximo fez toda a diferença.
            </p>

            <Avatar
              name="Henrique Cruz"
              title="Fundadora da NovaMind"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
      {props.children}
    </mark>
  );
}