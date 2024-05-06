import { Drink, DrinksData } from '@/utils/interfaces/drinks';
import Image from 'next/image';

const fetchSingleDrink = async (id: string) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`
  );

  const data = response.json();
  return data;
};

const SingleDrinkPage = async ({ params }: { params: { id: string } }) => {
  const { drinks }: DrinksData = await fetchSingleDrink(params.id);

  return (
    <div>
      <Image
        src={drinks[0].strDrinkThumb}
        alt={drinks[0].strDrink}
        width={300}
        height={300}
        className="img rounded-xl mb-8"
      ></Image>
      <h1 className="text-7xl">{drinks[0].strDrink}</h1>
      <p>{drinks[0].strCategory}</p>
    </div>
  );
};

export default SingleDrinkPage;
