import { useAppContext } from '../store/appContext';
import Wrapper from '../assets/wrappers/PaginationWrapper';

const Pagination = () => {
  const { numOfPages, page, handlePageChange } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    handlePageChange(newPage);
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    handlePageChange(newPage);
  };

  return (
    <Wrapper>
      <button
        className='prev-next-btn btn'
        onClick={prevPage}
        disabled={page === 1 && 'disabled'}
      >
        {'<'}
      </button>
      <div>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              className={pageNumber === page ? 'btn active' : 'btn'}
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              data-testid='pageBtn'
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        className='prev-next-btn btn'
        onClick={nextPage}
        disabled={page === numOfPages && 'disabled'}
      >
        {'>'}
      </button>
    </Wrapper>
  );
};
export default Pagination;
