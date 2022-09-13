import Wrapper from '../assets/wrappers/ProductsWrapper';
import Loading from './Loading';
import SingleProduct from './SingleProduct';
import { useAppContext } from '../store/appContext';

const Products = () => {
  const { products, isLoading } = useAppContext();

  if (isLoading) {
    return <Loading />;
  }

  if (!products.length && !isLoading) {
    return <div>Aranan kriterlerde urun bulunamadi.</div>;
  }

  return (
    <Wrapper>
      {products.map((product) => {
        return <SingleProduct key={product.id} product={product} />;
      })}
    </Wrapper>
  );
};
export default Products;
