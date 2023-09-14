import CardProjeto from "@/components/layout/cardProjeto";
import { Card } from "@/lib/interfaces";
import { Fragment } from "react";

interface CardsProps {
    cards: Card[];
}
export default function Cards({ cards }: CardsProps) {
    return (
        <section className="max-w-full grid grid-cols-12 gap-4">
            {cards.map((card) => (
                <Fragment key={card.id}>
                    <CardProjeto {...card} />
                </Fragment>
            ))}
        </section>
    );
}
