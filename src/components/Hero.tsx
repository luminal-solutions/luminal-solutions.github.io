"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/icon-ls.png";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Aqui ideias ganham luz{" "}
              <span className="text-[#8CAFFF]">
                <Typewriter
                  words={[
                    "e viram soluções.",
                    "e se tornam oportunidades.",
                    "e transformam negócios.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
            </h1>
            <p className="py-5 text-xl leading-normal text-[#E5E5FF] lg:text-xl xl:text-2xl dark:text-gray-300">
              Na <span className="text-[#8CAFFF]">Luminal Solutions</span>,
              desenvolvemos soluções tecnológicas personalizadas que impulsionam
              a inovação e a eficiência em negócios de todos os tamanhos.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/demo"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Solicitar Demonstração Gratuita
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
