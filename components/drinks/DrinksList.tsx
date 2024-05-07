import { DrinksData } from '@/utils/interfaces/drinks';
import Image from 'next/image';
import Link from 'next/link';

export default function DrinksList({ drinks }: DrinksData) {
  return (
    <ul className="grid grid-cols-2 gap-x-9 menu menu-vertical">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link
              className="grid grid-cols-2"
              key={drink.idDrink}
              href={`/drinks/${drink.idDrink}`}
            >
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                width="300"
                height="300"
              ></Image>
              <div>
                <h4 className="text-xl text-center font-bold">
                  {drink.strDrink}
                </h4>
                <p className="text-center">{drink?.strCategory || ''}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
