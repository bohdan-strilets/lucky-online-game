import Button from 'components/InterfaceElements/Button';
import { IDialogWindowState } from 'types/IDialogWindow';

import { Text, List, Item } from './DialogWindow.styled';

const DialogWindow: React.FC<IDialogWindowState> = ({
  onCencel,
  onDelete,
  text,
  successBtnText,
  failureBtnText,
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
            {failureBtnText}
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
            {successBtnText}
          </Button>
        </Item>
      </List>
    </div>
  );
};

export default DialogWindow;
