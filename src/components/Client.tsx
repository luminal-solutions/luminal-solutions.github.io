import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import Link from "next/link";

export const Client = () => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-16 md:justify-around items-center">
          <MorphLogo />
          <TicketLogo />
        </div>
      </div>
    </Container>
  );
};

function MorphLogo() {
  return (
    <Link href="https://morphia.com.br/" target="_blank" rel="noopener noreferrer">
      <div className="w-40 md:w-48 cursor-pointer">
        <Image
          src="/img/brands/MorphIA.png"
          alt="Logo da empresa Morph"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </Link>
  );
}

function TicketLogo() {
  return (
    <Link href="https://ticketimediato.com/" target="_blank" rel="noopener noreferrer">
      <div className="w-36 md:w-44 cursor-pointer">
      <Image
        src="/img/brands/TicketImediato.png"
        alt="Logo da Ticket Imediato"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </div>
    </Link>
  );
}
