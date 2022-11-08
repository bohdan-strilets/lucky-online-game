import Media from 'react-media';
import screenWidth from 'helpers/screenWidth';
import { IPagination } from 'types/IPagination';

import Mobile from './Responsiv/Mobile';
import Desktop from './Responsiv/Desktop';

const Pagination: React.FC<IPagination> = ({
  contentPerPage,
  arr,
  prevPage,
  page,
  setPage,
  gaps,
  totalPages,
  nextPage,
  margin,
}) => {
  return (
    <Media
      queries={{
        small: '(max-width: 1439px)',
        large: `(min-width: ${screenWidth.desktop})`,
      }}
    >
      {matches => (
        <>
          {matches.small && (
            <Mobile
              contentPerPage={contentPerPage}
              arr={arr}
              prevPage={prevPage}
              page={page}
              setPage={setPage}
              gaps={gaps}
              totalPages={totalPages}
              nextPage={nextPage}
              margin={margin}
            />
          )}
          {matches.large && (
            <Desktop
              contentPerPage={contentPerPage}
              arr={arr}
              prevPage={prevPage}
              page={page}
              setPage={setPage}
              gaps={gaps}
              totalPages={totalPages}
              nextPage={nextPage}
              margin={margin}
            />
          )}
        </>
      )}
    </Media>
  );
};

export default Pagination;
