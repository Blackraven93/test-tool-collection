import 'regenerator-runtime';

describe('Async API test', () => {
  test('cocktail API Gin', async () => {
    const json = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=gin`
    ).then((res) => res.json());

    expect(json['ingredients'][0].strType).toBe('Gin'); // Gin
  });

  test('cocktail API Vodka', async () => {
    const json = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka`
    ).then((res) => res.json());

    expect(json['ingredients'][0].strType).toBe('Vodka'); // Vodka
  });
});
