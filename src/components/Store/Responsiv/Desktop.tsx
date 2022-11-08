import bankFormatting from 'helpers/bankFormatting';
import useStore from 'hooks/useStore';
import usePagination from 'hooks/usePagination';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';
import Modal from 'components/Modal';
import ProductStore from 'components/Modal/ProductStore';
import Loader from 'components/InterfaceElements/Loader';
import DialogWindow from 'components/Modal/DialogWindow';
import Pagination from 'components/InterfaceElements/Pagination';

import {
  List,
  Item,
  Wrapper,
  Title,
  Photo,
  Description,
  Price,
} from '../Store.styled';

const Desktop: React.FC<{}> = () => {
  const {
    currentId,
    currentTitle,
    isFetching,
    openModalMoreInfo,
    showMoreDetails,
    closeModalMoreInfo,
    buy,
    showModalBuyItem,
    openModalDialogWindow,
    closeModalDialogWindow,
    currentAmount,
    items,
  } = useStore();

  const {
    firstContentIndex,
    gaps,
    lastContentIndex,
    nextPage,
    page,
    prevPage,
    setPage,
    totalPages,
  } = usePagination({ contentPerPage: 6, count: items ? items?.length : 0 });

  return (
    <>
      {isFetching && <Loader />}

      <List>
        {items &&
          items
            .slice(firstContentIndex, lastContentIndex)
            .map(({ _id, imageURL, title, description, price }) => {
              return (
                <Item key={_id} data-id={_id}>
                  <Container
                    type="color"
                    width="100%"
                    padding="20px"
                    height="600px"
                  >
                    <Wrapper data-id={_id} onClick={openModalMoreInfo}>
                      <Title>{title}</Title>
                      <Photo src={imageURL} alt={title} />
                      <Description>{description}</Description>
                      <Price>
                        {bankFormatting(Number(price).toFixed(2))} $
                      </Price>
                    </Wrapper>

                    <Button
                      type="button"
                      background="green"
                      height="60px"
                      width="100%"
                      borderRadius="50px"
                      shadow
                      onClick={openModalDialogWindow}
                      data-price={price}
                      data-id={_id}
                    >
                      Buy
                    </Button>
                  </Container>
                </Item>
              );
            })}
      </List>

      {items && (
        <Pagination
          contentPerPage={3}
          arr={items}
          gaps={gaps}
          nextPage={nextPage}
          page={page}
          prevPage={prevPage}
          setPage={setPage}
          totalPages={totalPages}
          margin="0 0 30px 0"
        />
      )}

      {showMoreDetails && (
        <Modal
          onClose={closeModalMoreInfo}
          title={currentTitle ? currentTitle : ''}
        >
          <ProductStore id={currentId as string} />
        </Modal>
      )}

      {showModalBuyItem && (
        <Modal
          onClose={closeModalDialogWindow}
          title="Do you want to buy this item?"
        >
          <DialogWindow
            onFailure={closeModalDialogWindow}
            onSuccess={() => buy(currentId as string, currentAmount as number)}
            failureBtnText="Cancel"
            successBtnText="Buy"
          />
        </Modal>
      )}
    </>
  );
};
export default Desktop;
