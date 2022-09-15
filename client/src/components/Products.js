import Wrapper from '../assets/wrappers/ProductsWrapper';
import Loading from './Loading';
import SingleProduct from './SingleProduct';
import { useAppContext } from '../store/appContext';
import { isProductInBasket } from '../utils/isProductInBasket';

const Products = () => {
  const { products, isLoading, basket } = useAppContext();

  if (isLoading) {
    return <Loading />;
  }

  if (!products.length && !isLoading) {
    return <div>Aranan kriterlerde urun bulunamadi.</div>;
  }

  return (
    <Wrapper>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            product={product}
            isProductInBasket={isProductInBasket(product.id, basket)}
          />
        );
      })}
    </Wrapper>
  );
};
export default Products;
