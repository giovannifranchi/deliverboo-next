import { FC, useContext } from "react";
import Badge from "../components/badge.component";
import { FilterContext } from "../contexts/filter.context";

const Restaurants: FC = ()=> {

    const { filters } = useContext(FilterContext);


    return (
        <div className="container">
            
        </div>
    )
}

export default Restaurants;