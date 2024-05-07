import { DrinksData } from '@/utils/interfaces/drinks';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const idSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchSingleDrink = async (id: string) => {
  const response = await fetch(`${idSearchUrl}${id}`);

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
    <div className="flex flex-col">
      <div className="relative">
        <Link
          href={'/drinks'}
          className="top-0 left-0 btn btn-ghost mt-8 mb-12"
        >
          <MoveLeft />
        </Link>
      </div>
      <div>
        <Image
          src={thumbnail}
          width={300}
          height={300}
          className="img rounded-xl mb-8 h-72 w-72"
          priority
          alt={title}
        ></Image>
        <h1 className="text-7xl">{title}</h1>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default SingleDrinkPage;
