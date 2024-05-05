import { DrinksData } from '@/utils/interfaces/drinks';
import Image from 'next/image';
import Link from 'next/link';

export default function DrinksList({ drinks }: DrinksData) {
  return (
    <ul className="menu menu-vertical">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link
              className="flex flex-col items-start"
              key={drink.idDrink}
              href={`/drinks/${drink.strDrink}`}
            >
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                width="200"
                height="200"
              ></Image>
              <h4>{drink.strDrink}</h4>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
