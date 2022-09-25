import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import useCoefficient from 'hooks/useCoefficient';

import { IEditComplexityData } from 'types/IProfile';
import { IChangeComplexityRes } from 'types/IUserRessponse';

const useEditComplexity = (
  onClose: () => void,
  complexity?: 'low' | 'medium' | 'high' | null,
) => {
  const dispatch = useAppDispatch();
  const { coefficientInfo } = useCoefficient();

  const initialValues = {
    complexity,
  };

  const changeComplexity = async (values: IEditComplexityData) => {
    if (values.complexity !== null && values.complexity !== undefined) {
      const res = await dispatch(
        operations.changeComplexity({
          complexity: values.complexity,
          bank: coefficientInfo[values.complexity].initialFunds,
        }),
      );

      if ((res.payload as IChangeComplexityRes).status === 'ok') {
        onClose();
      }
    }
  };

  return { initialValues, changeComplexity };
};

export default useEditComplexity;
