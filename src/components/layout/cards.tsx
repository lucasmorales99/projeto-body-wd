import CardProjeto from "@/components/layout/cardProjeto";
import { Card } from "@/lib/interfaces";

interface CardsProps {
    cards: Card[];
}
export default function Cards({ cards }: CardsProps) {
    return (
        <div className="max-w-full p-16">
            <div className="grid grid-cols-12 gap-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                    >
                        <CardProjeto {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
}
