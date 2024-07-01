export const getItems = (url) => fetch(url, {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    'x-rapidapi-key': 'c486cb759cmshf1f8192d46b1331p132efajsnbd77780b9401',
  },
})
  .then(response => response.json())
  .catch(err => {
    console.log(err);
  });

export const getListOfDrinks = async (url) => {
  const categories = await getItems(url);
  const items = categories.drinks;
  return items;
};
