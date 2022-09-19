import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useNavigate } from 'react-router-dom';
import useCoefficient from 'hooks/useCoefficient';

import { IChangeBankRes } from 'types/IUserRessponse';

const useCreateNewGame = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { coefficientInfo } = useCoefficient();

  const createNewGame = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.textContent as 'low' | 'medium' | 'high';

    const res = await dispatch(
      operations.createSession({
        complexity: value,
        bank: coefficientInfo?.[value].initialFunds,
      }),
    );

    if ((res.payload as IChangeBankRes).status === 'ok') {
      navigate('/game');
    }
  };

  return { createNewGame };
};

export default useCreateNewGame;
