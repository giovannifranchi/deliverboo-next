"use client"

import { Context, FC } from "react";
import { Typology } from "../page";
import { useContext } from "react";
import { FilterContext } from "../contexts/filter.context";

type Props = {
    typology: Typology
}

type FilterContextState = {
    filters: Set<number>;
    addFilter: (id: number) => void;
    removeFilter: (id: number) => void;
};

const TypologyCard: FC<Props> = ({ typology }) => {

    const {addFilter} = useContext<any>(FilterContext)

    const { name, image, id } = typology;

    const formatUrl = (image: string | null)=> image ? `${process.env.BASE_URL}/${image}` : '';

    const handleClick = (id:number)=> {
        addFilter(id);
    }

    return (
        <div className="hover:scale-110" >
            <img src={formatUrl(image)} className="rounded-box object-cover h-[180px] w-[180px]"/>
            <h6 className="text-primarygreen">{name}</h6>
        </div>
    )
}

export default TypologyCard;