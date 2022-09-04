import IconsSVG from './icons.svg';
import { IIconSwitcherState } from 'types/IIconSwitcher';

const IconSwitcher: React.FC<IIconSwitcherState> = ({
  name,
  fill,
  stroke,
  size,
}) => {
  return (
    <svg fill={fill} stroke={stroke} width={size} height={size}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};

export default IconSwitcher;
