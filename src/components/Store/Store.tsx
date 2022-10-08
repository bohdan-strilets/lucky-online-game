import bankFormatting from 'helpers/bankFormatting';
import useStore from 'hooks/useStore';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import Modal from 'components/Modal';
import ProductStore from 'components/Modal/ProductStore';
import Loader from 'components/InterfaceElements/Loader';

import {
  List,
  Item,
  Title,
  Photo,
  Description,
  Price,
  Navigation,
} from './Store.styled';

const Store: React.FC<{}> = () => {
  const {
    allImages,
    comeBack,
    currentId,
    currentTitle,
    isFetching,
    items,
    openModal,
    page,
    showMore,
    showMoreDetails,
    total,
    closeModal,
  } = useStore();

  return (
    <>
      {isFetching && <Loader />}

      <List>
        {items &&
          items.map(({ _id, imageURL, title, description, price }) => {
            return (
              <Item key={_id} data-id={_id} onClick={openModal}>
                <Container
                  type="color"
                  width="100%"
                  padding="20px"
                  height="600px"
                >
                  <Title>{title}</Title>
                  <Photo src={imageURL} alt={title} />
                  <Description>{description}</Description>
                  <Price>{bankFormatting(Number(price).toFixed(2))} $</Price>

                  <Button
                    type="button"
                    background="green"
                    height="60px"
                    width="100%"
                    borderRadius="50px"
                    shadow
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
        width="100%"
        alignItems="center"
        padding="15px"
        margin="15px"
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
        <Modal onClose={closeModal} title={currentTitle ? currentTitle : ''}>
          <ProductStore id={currentId as string} />
        </Modal>
      )}
    </>
  );
};

export default Store;
