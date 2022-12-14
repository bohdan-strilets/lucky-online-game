import Button from 'components/InterfaceElements/Button';
import { IDialogWindowState } from 'types/IDialogWindow';

import { Text, List, Item } from '../DialogWindow.styled';

const Mobile: React.FC<IDialogWindowState> = ({
  onFailure,
  onSuccess,
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
            width="250px"
            borderRadius="50px"
            shadow
            onClick={onFailure}
          >
            {failureBtnText}
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="green"
            height="50px"
            width="250px"
            borderRadius="50px"
            shadow
            onClick={onSuccess}
          >
            {successBtnText}
          </Button>
        </Item>
      </List>
    </div>
  );
};
export default Mobile;
