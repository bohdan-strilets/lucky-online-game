import Media from 'react-media';
import screenWidth from 'helpers/screenWidth';

import { IDialogWindowState } from 'types/IDialogWindow';

import Mobile from './Responsiv/Mobile';
import Desktop from './Responsiv/Desktop';

const DialogWindow: React.FC<IDialogWindowState> = ({
  onFailure,
  onSuccess,
  text,
  successBtnText,
  failureBtnText,
}) => {
  return (
    <Media
      queries={{
        small: '(max-width: 1439px)',
        large: `(min-width: ${screenWidth.desktop})`,
      }}
    >
      {matches => (
        <>
          {matches.small && (
            <Mobile
              onFailure={onFailure}
              onSuccess={onSuccess}
              text={text}
              successBtnText={successBtnText}
              failureBtnText={failureBtnText}
            />
          )}
          {matches.large && (
            <Desktop
              onFailure={onFailure}
              onSuccess={onSuccess}
              text={text}
              successBtnText={successBtnText}
              failureBtnText={failureBtnText}
            />
          )}
        </>
      )}
    </Media>
  );
};

export default DialogWindow;
