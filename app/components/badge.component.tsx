import { FC } from "react";

type Props = {
    info: {
        id:number;
        name:string;
    }
}

const Badge: FC<Props> = ({info})=> {

    const { id, name } = info;

    const classSwitcher = ()=>{
        switch((id % 3) + 1){
            case 1:
                return 'bg-primarygreen';
            case 2:
                return 'bg-primaryblue';
            case 3: 
                return 'bg-primarypink'
            default:
                return 'bg-info';
        }
    }

    return (
        <span className={`badge ${classSwitcher()} rounded p-5`}>
            <h3 className="text-black text-lg font-bold">{name.toUpperCase()}</h3>
        </span>
    );
}

export default Badge;