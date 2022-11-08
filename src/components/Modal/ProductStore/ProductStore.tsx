import { useGetOneItemQuery } from 'redux/store/storeApi';
import bankFormatting from 'helpers/bankFormatting';
import useStore from 'hooks/useStore';

import Button from 'components/InterfaceElements/Button';
import Loader from 'components/InterfaceElements/Loader';
import Modal from '../Modal';
import DialogWindow from '../DialogWindow';

import { IProductStore } from 'types/IProductStore';
import { PhotoWrapper, Photo, Text, Price } from './ProductStore.styled';

const ProductStore: React.FC<IProductStore> = ({ id }) => {
  const { data, isFetching } = useGetOneItemQuery(id);

  const {
    buy,
    closeModalDialogWindow,
    openModalDialogWindow,
    showModalBuyItem,
  } = useStore();

  return (
    <>
      {isFetching && <Loader />}

      {data && (
        <div>
          <PhotoWrapper>
            <Photo src={data?.item.imageURL} alt={data?.item.title} />
          </PhotoWrapper>
          <Text>{data?.item.description}</Text>
          <Price>{bankFormatting(Number(data?.item.price).toFixed(2))} $</Price>
          <Button
            type="button"
            background="green"
            height="60px"
            width="100%"
            borderRadius="50px"
            shadow
            onClick={openModalDialogWindow}
          >
            Buy
          </Button>
        </div>
      )}

      {showModalBuyItem && data && (
        <Modal
          onClose={closeModalDialogWindow}
          title="Do you want to buy this item?"
        >
          <DialogWindow
            onFailure={closeModalDialogWindow}
            onSuccess={() => buy(data.item._id, data.item.price)}
            failureBtnText="Cancel"
            successBtnText="Buy"
          />
        </Modal>
      )}
    </>
  );
};

export default ProductStore;
