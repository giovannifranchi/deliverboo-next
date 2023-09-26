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
                return 'badge-primarygreen';
            case 2:
                return 'badge-primaryblue';
            case 3: 
                return 'badge-primarypink'
            default:
                return 'badge-info';
        }
    }

    return (
        <span className={classSwitcher()}>
            {name.toUpperCase()}
        </span>
    );
}

export default Badge;