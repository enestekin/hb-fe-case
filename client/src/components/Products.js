import Wrapper from '../assets/wrappers/ProductsWrapper';
import { Loading } from './index';
import { SingleProduct } from './index';
import { useAppContext } from '../store/appContext';

const Products = () => {
  const { products, isLoading } = useAppContext();

  if (isLoading) {
    return <Loading />;
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
