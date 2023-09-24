import { FC } from "react";
import { Typology } from "../page";

type Props = {
    typology: Typology
}

const TypologyCard: FC<Props> = ({ typology }) => {

    const { name, image } = typology;

    const formatUrl = (image: string | null)=> image ? `${process.env.BASE_URL}/${image}` : '';

    return (
        <div className="hover:scale-110">
            <img src={formatUrl(image)} className="rounded-box object-cover h-[180px] w-[180px]"/>
            <h6 className="text-primarygreen">{name}</h6>
        </div>
    )
}

export default TypologyCard;