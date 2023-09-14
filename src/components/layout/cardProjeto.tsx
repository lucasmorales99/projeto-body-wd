import Link from "next/link";
import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CardProjetoProps {
    title: string;
    description: string;
    imageHref: string;
    pageHref: string;
}

export default function CardProjeto({ title, description, imageHref, pageHref }: CardProjetoProps) {
    return (
        <Link href={pageHref} className={"col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"}>
            <Card>
                <CardHeader>
                    <AspectRatio ratio={16 / 9} className="rounded-sm">
                        <Image
                            src={imageHref}
                            alt="code"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            fill
                        />
                    </AspectRatio>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
}
