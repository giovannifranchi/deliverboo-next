import { FC } from "react"
import { Restaurant } from "../page"
import Image from "next/image"

export type Props = {
    restaurant: Restaurant
}

export const RestaurantCard: FC<Props> = ({restaurant})=>{

    const { name, image, slug, typologies } = restaurant;

    if(!image) return '';

    const generateUrl = (image:string): string => `${process.env.BASE_URL}/${image}`;

    return (
        <article className="w-full rounded shadow-slate-50 border-t-sky-50">
        <div className="aspect-w-16 aspect-h-9 relative h-60">
            <Image src={generateUrl(image)} alt={restaurant.name} layout="fill" objectFit="cover" />
        </div>
        <main>
            <h3>{restaurant.name.toUpperCase()}</h3>
        </main>
    </article>
    )
} 