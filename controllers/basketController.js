const addToBasket = (req, res) => {
  try {
    const { productItem, basket } = req.body;
    console.log(basket);

    basket.push({
      id: productItem.id,
      description: productItem.description,
      image: productItem.image,
    });

    res.json(basket);
  } catch (error) {
    let message =
      typeof error.response !== 'undefined'
        ? error.response.data.message
        : error.message;
    res.status(500).json(message);
  }
};

const deleteFromBasket = (req, res) => {
  try {
    const { basketItem, basket } = req.body;
    console.log(basket);

    const itemIndex = basket.findIndex((item) => item.id === basketItem.id);
    const updatedItems = basket.filter((_, index) => index !== itemIndex);

    res.json(updatedItems);
  } catch (error) {
    let message =
      typeof error.response !== 'undefined'
        ? error.response.data.message
        : error.message;
    res.status(500).json(message);
  }
};

export { addToBasket, deleteFromBasket };
