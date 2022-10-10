import useMyItems from 'hooks/useMyItems';
import bankFormatting from 'helpers/bankFormatting';

import Button from 'components/InterfaceElements/Button';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import Modal from 'components/Modal';
import DialogWindow from 'components/Modal/DialogWindow';

import { IItem } from 'types/IStore';
import { List, Item, Photo, Title, Price, ButtonWrapper } from './MyItems.styled';

const MyItems: React.FC<{ products: IItem[] }> = ({ products }) => {
  const { closeDialogWindow, openDialogWindow, sell, currentPrice, halfPrice, showDialog } =
    useMyItems();

  return (
    <>
      <List>
        {products.map(({ imageURL, title, price }, index) => (
          <Item key={index}>
            <Photo src={imageURL} alt={title} />
            <Title>{title}</Title>
            <Price>{bankFormatting(Number(price).toFixed(2))} $</Price>
            <ButtonWrapper>
              <Button
                type="button"
                background="green"
                width="40px"
                height="40px"
                borderRadius="10px"
                onClick={openDialogWindow}
                data-index={index}
                data-price={price}
              >
                <IconSwitcher name="dollar" size="22px" fill="var(--white-color)" />
              </Button>
            </ButtonWrapper>
          </Item>
        ))}
      </List>

      {showDialog && (
        <Modal title="Are you sure you want to sell this item?" onClose={closeDialogWindow}>
          <DialogWindow
            successBtnText="Sell"
            failureBtnText="Cancel"
            onFailure={closeDialogWindow}
            onSuccess={sell}
            text={`The price of this item on the market is ${bankFormatting(
              Number(currentPrice).toFixed(2),
            )} $ do you really want to sell it for half the price? You can only get ${bankFormatting(
              Number(halfPrice).toFixed(2),
            )} $`}
          />
        </Modal>
      )}
    </>
  );
};

export default MyItems;
