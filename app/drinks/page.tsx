import DrinksFetch from '@/utils/interfaces/drinks';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const DrinksPage = async () => {
  const response = await fetch(URL);
  const data: DrinksFetch = await response.json();

  return (
    <div>
      {data.drinks.map((item) => {
        return <h1 key={item.idDrink}>{item.strDrink}</h1>;
      })}
    </div>
  );
};

export default DrinksPage;
