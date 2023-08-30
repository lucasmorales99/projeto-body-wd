import Cards, { Card } from "@/components/layout/cards";
import { v4 } from "uuid";

const cards: Card[] = [
  {
    id: v4(),
    imageHref: "https://i.imgur.com/VyPhjnu.jpg",
    description: "Descrição1",
    title: "Titulo1",
    pageHref: "/",
  },
  {
    id: v4(),
    imageHref: "https://i.imgur.com/VyPhjnu.jpg",
    description: "Descrição2",
    title: "Titulo2",
    pageHref: "/",
  },
  {
    id: v4(),
    imageHref: "https://i.imgur.com/VyPhjnu.jpg",
    description: "Descrição3",
    title: "Titulo3",
    pageHref: "/",
  },
  {
    id: v4(),
    imageHref: "https://i.imgur.com/VyPhjnu.jpg",
    description: "Descrição3",
    title: "Titulo3",
    pageHref: "/",
  },
  {
    id: v4(),
    imageHref: "https://i.imgur.com/VyPhjnu.jpg",
    description: "Descrição2",
    title: "Titulo2",
    pageHref: "/",
  },
  {
    id: v4(),
    imageHref: "https://i.imgur.com/VyPhjnu.jpg",
    description: "Descrição3",
    title: "Titulo3",
    pageHref: "/",
  },
  {
    id: v4(),
    imageHref: "https://i.imgur.com/VyPhjnu.jpg",
    description: "Descrição3",
    title: "Titulo3",
    pageHref: "/",
  },
];

export default function Home() {
  return (
    <main>
      <div>conteúdo top</div>
      <Cards cards={cards} />
    </main>
  );
}
