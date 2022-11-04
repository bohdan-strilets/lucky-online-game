import bankFormatting from 'helpers/bankFormatting';
import useStore from 'hooks/useStore';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import Modal from 'components/Modal';
import ProductStore from 'components/Modal/ProductStore';
import Loader from 'components/InterfaceElements/Loader';
import DialogWindow from 'components/Modal/DialogWindow';

import {
  List,
  Item,
  Wrapper,
  Title,
  Photo,
  Description,
  Price,
  Navigation,
} from '../Store.styled';

const Tablet: React.FC<{}> = () => {
  const {
    allImages,
    comeBack,
    currentId,
    currentTitle,
    isFetching,
    items,
    openModalMoreInfo,
    page,
    showMore,
    showMoreDetails,
    total,
    closeModalMoreInfo,
    buy,
    showModalBuyItem,
    openModalDialogWindow,
    closeModalDialogWindow,
    currentAmount,
  } = useStore();

  return (
    <>
      {isFetching && <Loader />}

      <List>
        {items &&
          items.map(({ _id, imageURL, title, description, price }) => {
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
                    <Price>{bankFormatting(Number(price).toFixed(2))} $</Price>
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

      <Container
        type="transparent"
        width="680px"
        padding="10px"
        margin="50px 0 80px 0"
      >
        <Navigation>
          {page > 1 && (
            <Button
              type="button"
              background="blue"
              borderRadius="10px"
              height="40px"
              width="150px"
              margin="0 50px 0 0"
              onClick={comeBack}
            >
              <IconSwitcher
                name="arrowLeft"
                size="22px"
                fill="var(--white-color)"
              />
            </Button>
          )}
          {allImages !== total && (
            <Button
              type="button"
              background="blue"
              borderRadius="10px"
              height="40px"
              width="150px"
              onClick={showMore}
            >
              <IconSwitcher
                name="arrowRight"
                size="22px"
                fill="var(--white-color)"
              />
            </Button>
          )}
        </Navigation>
      </Container>

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
export default Tablet;
