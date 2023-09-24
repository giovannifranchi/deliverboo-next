
export type Restaurant = {
  id: number;
  user_id: number;
  name: string;
  slug: string;
  vat_number: string;
  address: string;
  poastal_code?: string;
  city: string;
  business_times: string;
  phone_number: string;
  delivery_cost: number;
  min_purchase: number;
  image: string | null;
  typologies: Typology[];
}

export type Typology = {
  id:number;
  name:string;
  slug:string;
  image:string;
}

import { RestaurantCard } from './components/restaurantCard.component';

export default async function Home() {

  const response = await fetch(`${process.env.BASE_URL}/restaurants`);
  const restaurants: Restaurant[] = await response.json();

  return (
    <main className='container mx-auto pt-5'>
      <section className='columns-3'>
        {
          restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
        }
      </section>
    </main>
  )
}
