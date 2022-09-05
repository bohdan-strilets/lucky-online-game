import Button from 'components/Button';
import { IDeleteModalState } from 'types/IDeleteModal';

import { Text, List, Item } from './DeleteModal.styled';

const DeleteModal: React.FC<IDeleteModalState> = ({
  onCencel,
  onDelete,
  text,
}) => {
  return (
    <div>
      <Text>{text && text}</Text>

      <List>
        <Item>
          <Button
            type="button"
            background="blue"
            height="50px"
            width="300px"
            borderRadius="50px"
            shadow
            onClick={onCencel}
          >
            Cancel
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="green"
            height="50px"
            width="300px"
            borderRadius="50px"
            shadow
            onClick={onDelete}
          >
            Delete
          </Button>
        </Item>
      </List>
    </div>
  );
};

export default DeleteModal;
