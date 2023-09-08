import { ReactNode } from "react";

import NavBar from "@/components/layout/navBar";
import { homeNavBarItems } from "@/lib/itens";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar title={"Portfolio"} menuItens={homeNavBarItems} />
      {children}
    </>
  );
}
