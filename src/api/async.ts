// interface Coctail {
//   ingredients: [Detail];
// }

// interface Detail {
//   idIngredient: string;
//   strIngredient: string;
//   strDescription: string;
//   strType: string;
//   strAlcohol: string;
//   strABV: string;
// }

const request = () => {
  const response = fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka`
  );
  return response.then((res) => res.json());
};

const exec = async () => {
  try {
    const text = await request();
  } catch (error) {
    console.log(error);
  }
};

// const requestCoctail = async (ingredient: string) => {
// const request = fetch(
//   `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka`
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//     return myJson;
//   });

// console.log(request['ingredients'][0].strType);
// };

// console.log(requestCoctail('vodka'));
