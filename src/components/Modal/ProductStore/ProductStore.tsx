import { useGetOneItemQuery } from 'redux/store/storeApi';
import bankFormatting from 'helpers/bankFormatting';

import Button from 'components/InterfaceElements/Button';
import Loader from 'components/InterfaceElements/Loader';

import { IProductStore } from 'types/IProductStore';
import { PhotoWrapper, Photo, Text, Price } from './ProductStore.styled';

const ProductStore: React.FC<IProductStore> = ({ id }) => {
  const { data, isFetching } = useGetOneItemQuery(id);

  return (
    <>
      {isFetching && <Loader />}

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
        >
          Buy
        </Button>
      </div>
    </>
  );
};

export default ProductStore;
