import 'regenerator-runtime';

test('cocktail API test', async () => {
  const data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka`
  ).then((res) => res.json());

  expect(data['ingredients'][0].strType).toBe('codka'); // Vodka
});
