import { useState } from 'react';
import { Wrapper, Image, Button } from '../assets/wrappers/SingleProduct';

const SingleProduct = ({ product }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const { description, brand, color, discount, discountedPrice, image, price } =
    product;
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
        {isMouseEnter && <Button type='button'>Sepete Ekle</Button>}
      </div>
    </Wrapper>
  );
};
export default SingleProduct;
