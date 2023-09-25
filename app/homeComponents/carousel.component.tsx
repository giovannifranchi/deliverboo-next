"use client";

import { FC } from "react";
import { Typology } from "../page";
import TypologyCard from "../components/typologyCard.component";

const Carousel: FC = async () => {

    const response = await fetch(`${process.env.BASE_URL}/typologies`);
    const typologies: Typology[] = await response.json();

    

    return (
        <div className="bg-primaryblue w-full py-4 overflow-x-hidden">
            <h4 className="text-primarygreen text-2xl px-10 mb-10">Scegli per categoria</h4>
            <div className="flex gap-3 justify-between px-10">
                {
                    typologies.map((typology) => <TypologyCard key={typology.id} typology={typology}/>)
                }
            </div>
        </div>
    )
}

export default Carousel