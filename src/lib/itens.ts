import { v4 } from "uuid";

import { Card, navBarItems } from "@/lib/interfaces";

export const projectsCards: Card[] = [
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

export const homeNavBarItems: navBarItems[] = [
  {
    id: v4(),
    label: "Home",
    href: "/",
  },
];
