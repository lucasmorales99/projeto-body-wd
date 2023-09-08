import Cards from "@/components/layout/cards";
import { projectsCards } from "@/lib/itens";

export default function Home() {
  return (
    <main>
      <div>conteúdo top</div>
      <Cards cards={projectsCards} />
    </main>
  );
}
