import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Tecnologia que entende o seu negócio",
  desc: "Na Luminal, cada solução é pensada sob medida. Nossa abordagem combina inovação, inteligência e proximidade para impulsionar resultados concretos.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Experiência centrada no cliente",
      desc: "Entendemos sua realidade antes de propor qualquer solução. Cada projeto é construído em parceria com você.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Automação que gera impacto real",
      desc: "Ajudamos sua empresa a reduzir retrabalho, cortar custos e escalar com eficiência.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Retenção e fidelização inteligentes",
      desc: "Criamos soluções que entregam valor contínuo, fortalecendo a relação com seus clientes.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Soluções modernas, robustas e escaláveis",
  desc: "Utilizamos as melhores tecnologias do mercado para garantir que sua empresa esteja pronta para o futuro — com flexibilidade e segurança.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Design responsivo e intuitivo",
      desc: "Interfaces modernas, adaptáveis a qualquer dispositivo, pensadas para a melhor usabilidade.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Stack tecnológico de ponta",
      desc: "Utilizamos tecnologias modernas, escolhidas para garantir alta performance, segurança e fácil integração com as principais soluções do mercado.",
      icon: <AdjustmentsHorizontalIcon />,
    },    
    {
      title: "Integrações sem dor de cabeça",
      desc: "Conectamos sua solução aos sistemas que você já usa — ERPs, CRMs, plataformas de pagamento e muito mais.",
      icon: <LinkIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
