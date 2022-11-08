import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import Button from 'components/InterfaceElements/Button';
import Container from 'components/InterfaceElements/Container';

import { IPagination } from 'types/IPagination';
import { Wrapper, Points } from '../Pagination.styled';

const Mobile: React.FC<IPagination> = ({
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
    <Container
      type="transparent"
      width="100%"
      padding="15px 10px"
      alignItems="center"
      margin={margin}
    >
      <Wrapper>
        <Button
          type="button"
          background="blue"
          borderRadius="10px"
          height="35px"
          width="35px"
          onClick={prevPage}
          margin="0 3px 0 0"
        >
          <IconSwitcher
            name="arrowLeft"
            size="16px"
            fill="var(--white-color)"
          />
        </Button>

        {page === 1 ? (
          <Button
            type="button"
            background="green"
            borderRadius="10px"
            height="35px"
            width="35px"
            onClick={() => setPage(1)}
            margin="0 3px 0 0"
          >
            1
          </Button>
        ) : (
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            height="35px"
            width="35px"
            onClick={() => setPage(1)}
            margin="0 3px 0 0"
          >
            1
          </Button>
        )}

        {gaps.before ? <Points>...</Points> : null}
        {gaps.paginationGroup.map((el: number) =>
          page === el ? (
            <Button
              type="button"
              background="green"
              borderRadius="10px"
              height="35px"
              width="35px"
              onClick={() => setPage(el)}
              margin="0 3px 0 0"
            >
              {el}
            </Button>
          ) : (
            <Button
              type="button"
              background="blue"
              borderRadius="10px"
              height="35px"
              width="35px"
              onClick={() => setPage(el)}
              margin="0 3px 0 0"
            >
              {el}
            </Button>
          ),
        )}
        {gaps.after ? <Points>...</Points> : null}

        {page === totalPages ? (
          <Button
            type="button"
            background="green"
            borderRadius="10px"
            height="35px"
            width="35px"
            onClick={() => setPage(totalPages)}
            margin="0 3px 0 0"
          >
            {totalPages}
          </Button>
        ) : (
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            height="35px"
            width="35px"
            onClick={() => setPage(totalPages)}
            margin="0 3px 0 0"
          >
            {totalPages}
          </Button>
        )}

        <Button
          type="button"
          background="blue"
          borderRadius="10px"
          height="35px"
          width="35px"
          onClick={nextPage}
        >
          <IconSwitcher
            name="arrowRight"
            size="16px"
            fill="var(--white-color)"
          />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Mobile;
