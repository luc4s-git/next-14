type strIngredient = string | null;
type strMeasure = string | null;

export type Drink = {
  'strInstructionsZH-HANT': string;
  'strInstructionsZH-HANS': string;
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string;
  strTags: string;
  strVideo: string;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string;
  strInstructionsDE: string;
  strInstructionsFR: string;
  strInstructionsIT: string;
  strDrinkThumb: string;
  strIngredient1: strIngredient;
  strIngredient2: strIngredient;
  strIngredient3: strIngredient;
  strIngredient4: strIngredient;
  strIngredient5: strIngredient;
  strIngredient6: strIngredient;
  strIngredient7: strIngredient;
  strIngredient8: strIngredient;
  strIngredient9: strIngredient;
  strIngredient10: strIngredient;
  strIngredient11: strIngredient;
  strIngredient12: strIngredient;
  strIngredient13: strIngredient;
  strIngredient14: strIngredient;
  strIngredient15: strIngredient;
  strMeasure1: strMeasure;
  strMeasure2: strMeasure;
  strMeasure3: strMeasure;
  strMeasure4: strMeasure;
  strMeasure5: strMeasure;
  strMeasure6: strMeasure;
  strMeasure7: strMeasure;
  strMeasure8: strMeasure;
  strMeasure9: strMeasure;
  strMeasure10: strMeasure;
  strMeasure11: strMeasure;
  strMeasure12: strMeasure;
  strMeasure13: strMeasure;
  strMeasure14: strMeasure;
  strMeasure15: strMeasure;
  strImageSource: string;
  strImageAttribution: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
};

export type DrinksData = {
  drinks: Drink[];
};

export interface TaskType {
  id: string;
  content: string;
  createdAt: Date;
  completed: boolean;
}
