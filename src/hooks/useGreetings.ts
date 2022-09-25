import { useAppSelector } from 'hooks/useAppSelector';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useGreetings = () => {
  const [showRulles, setShowRulles] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const toogle = () => setShowRulles(prevstate => !prevstate);

  return { isLoggedIn, navigate, toogle, showRulles };
};

export default useGreetings;
