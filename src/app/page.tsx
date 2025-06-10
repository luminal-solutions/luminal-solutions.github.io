import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Client } from "@/components/Client";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle title="Parceiros">
        Com a confiança de empresas lideres em{" "}
        <span className="text-[#8CAFFF]">tecnologia e inovação</span>{" "}
      </SectionTitle>
      <Client />
      
      <SectionTitle title="Por que escolher a Luminal?">
        Na Luminal, iluminamos o caminho da transformação digital com soluções
        tecnológicas sob medida. Ajudamos empresas a evoluírem com inovação,
        inteligência e impacto real — do planejamento à execução.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* 
      <SectionTitle
        preTitle="Demonstração"
        title="Descubra como nossas soluções podem transformar o seu negócio"
      >
        Conheça na prática como nossas plataformas inteligentes e nossos serviços personalizados
        estão ajudando empresas a crescerem com mais eficiência, inovação e autonomia.
      </SectionTitle> */}

      <SectionTitle title="Perguntas Frequentes">
        Tire suas dúvidas sobre como trabalhamos, quais serviços oferecemos e
        como podemos ajudar sua empresa a avançar com segurança e inovação.
      </SectionTitle>

      <Faq />
    </Container>
  );
}
