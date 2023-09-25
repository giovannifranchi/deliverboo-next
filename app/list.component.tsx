"use client"

import { FC } from "react"
import Carousel from "./homeComponents/carousel.component";
import Restaurants from "./homeComponents/restaurants.component";
import { FilterProvider } from "./contexts/filter.context";



const List:FC = ()=> {
    return (
        <FilterProvider>
            <Carousel/>
            <Restaurants/>
        </FilterProvider>
    );
}

export default List;