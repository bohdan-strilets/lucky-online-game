import { useState, useEffect } from 'react';
import { useGetAllItemsQuery } from 'redux/store/storeApi';
import bankFormatting from 'helpers/bankFormatting';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import Modal from 'components/Modal';
import ProductStore from 'components/Modal/ProductStore';

import { IItem } from 'types/IStore';
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
  const [items, setItems] = useState<null | undefined | IItem[]>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [allImages, setAllImages] = useState(0);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [currentTitle, setCurrentTitle] = useState<null | string>(null);
  const [currentId, setCurrentId] = useState<null | string>(null);

  const { data, isFetching } = useGetAllItemsQuery({ page, limit: 9 });

  useEffect(() => {
    if (data !== undefined) {
      if (page === 1) {
        setItems(data?.items);
        setTotal(data?.total);
        setAllImages(data.items.length);
      }

      if (page !== 1) {
        setItems(data.items);
        setAllImages(prevState => prevState + data.items.length);
      }
    }
  }, [data, page]);

  const showMore = () => setPage(prevState => prevState + 1);

  const comeBack = () => setPage(prevState => prevState - 1);

  const openModal = (e: React.MouseEvent<HTMLLIElement>) => {
    const id = e.currentTarget.dataset.id;
    const title = e.currentTarget.children[0].children[0].textContent;

    setCurrentTitle(title);
    setShowMoreDetails(true);

    if (id) {
      setCurrentId(id);
    }
  };

  return (
    <>
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
        <Modal
          onClose={() => setShowMoreDetails(false)}
          title={currentTitle ? currentTitle : ''}
        >
          <ProductStore id={currentId as string} />
        </Modal>
      )}
    </>
  );
};

export default Store;
