import Cards from "@/components/layout/cards";
import { projectsCards } from "@/lib/itens";

export default function Home() {
    return (
        <>
            <Cards cards={projectsCards} />
        </>
    );
}
