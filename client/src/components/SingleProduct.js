import { useState } from 'react';
import {
  Wrapper,
  Image,
  Button,
} from '../assets/wrappers/SingleProductWrapper';
import { useAppContext } from '../store/appContext';

const SingleProduct = ({ product, isProductInBasket }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const { description, brand, color, discount, discountedPrice, image, price } =
    product;
  const { addToBasket } = useAppContext();

  const handleClick = (product) => {
    const productItem = { ...product, addDate: new Date().getTime() };
    addToBasket(productItem);
  };

  return (
    <Wrapper
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      isMouseEnter={isMouseEnter}
    >
      <Image isMouseEnter={isMouseEnter}>
        <img src={image} alt='product' />
      </Image>
      <div>
        <p>{description}</p>
        {!isMouseEnter && (
          <>
            <p>
              <span>Marka:</span>
              {brand}
            </p>
            <p>
              <span>Renk:</span>
              {color}
            </p>
            <p>{discountedPrice} TL</p>
            <p>
              <del>{price}</del> TL
            </p>
            <span className='discount'>{discount}</span>
          </>
        )}
        {isMouseEnter && !isProductInBasket && (
          <Button type='button' onClick={() => handleClick(product)}>
            Sepete Ekle
          </Button>
        )}
        {isMouseEnter && isProductInBasket && (
          <Button className='disabled' type='button' disabled>
            Bu ürünü sepete ekleyemezsiniz.
          </Button>
        )}
      </div>
    </Wrapper>
  );
};
export default SingleProduct;
