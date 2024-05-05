import DrinksList from '@/components/drinks/DrinksList';
import { DrinksData } from '@/utils/interfaces/drinks';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async (): Promise<DrinksData> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error('Failed to fetch drinks.');
  }

  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data?.drinks}></DrinksList>
    </div>
  );
};

export default DrinksPage;
