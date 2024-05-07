import { Drink, DrinksData } from '@/utils/interfaces/drinks';
import Image from 'next/image';

const fetchSingleDrink = async (id: string) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (!response.ok) throw new Error('Failed to fetch a drink...');

  const data = response.json();
  return data;
};

const SingleDrinkPage = async ({ params }: { params: { id: string } }) => {
  const { drinks }: DrinksData = await fetchSingleDrink(params.id);

  const title = drinks[0]?.strDrink;
  const category = drinks[0]?.strCategory;
  const thumbnail = drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={300}
        className="img rounded-xl mb-8"
      ></Image>
      <h1 className="text-7xl">{title}</h1>
      <p>{category}</p>
    </div>
  );
};

export default SingleDrinkPage;
