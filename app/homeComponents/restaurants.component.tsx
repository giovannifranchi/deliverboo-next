import { FC, useContext } from "react";
import Badge from "../components/badge.component";
import { FilterContext } from "../contexts/filter.context";
import { useEffect, useState } from "react";
import { Typology } from "../page";
import axios from "axios";

const Restaurants: FC = ()=> {

    const { filters } = useContext(FilterContext);
    const [typologies, setTypologies] = useState<Typology[]>([])
    const getBadges = (filters: Set<number>): Typology[]=> {
        const badges =  typologies.filter((typo)=> filters.has(typo.id) );
        return badges;
    }

    useEffect(() => {
        const fetchData = () => {
            axios.get(`http://localhost:3030/typologies`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((response)=> {
                setTypologies(response.data);
            });

            
        }

        fetchData();
    }, [])


    return (
        <div className="container">
            { getBadges(filters).map((badge)=> <Badge key={badge.id} info={badge} />) }
        </div>
    )
}

export default Restaurants;