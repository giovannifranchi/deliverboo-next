import { FC } from "react"
import { Restaurant } from "../page"
import Image from "next/image"

export type Props = {
    restaurant: Restaurant
}

export const RestaurantCard: FC<Props> = ({ restaurant }) => {

    const { name, image, slug, typologies } = restaurant;

    const generateUrl = (image: string | null): string => image ? `${process.env.BASE_URL}/${image}` : '';

    return (
        <div>
            card
        </div>
    )
} 