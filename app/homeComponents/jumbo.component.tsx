import { url } from "inspector";
import { FC } from "react";

const Jumbo: FC = () => {
    return (
        <div className="bg-primarypink h-[60vh] flex items-center" style={{ backgroundImage: `url("./jumbotron-background.svg")`, backgroundRepeat: 'no-repeat' }}>
            <div className="flex container mx-auto justify-between items-center px-5">
                <div className="flex gap-18 self-end">
                    <img src="./pinkburger.png" alt="pink burger" width={200} height={230} />
                    <h2 className="text-slate-700 text-3xl font-bold self-center">I tuoi piatti preferiti <br/> direttamente a casa tua.</h2>
                </div>
                <div className="flex gap-18">
                    <h1 className="text-primarygreen text-6xl font-bold self-center">Flamin<span className="text-primarypink">Goo</span></h1>
                    <img src="./logo-green.png" alt="pink burger" width={200} height={350} />
                </div>
            </div>
        </div>
    )
}

export default Jumbo;

