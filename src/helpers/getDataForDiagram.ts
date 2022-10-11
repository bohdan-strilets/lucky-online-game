export interface IGetDataForDiagramState {
  labeles: string[];
  dataArr: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

const getDataForDiagram = ({
  labeles,
  dataArr,
  backgroundColor,
  borderColor,
  borderWidth,
}: IGetDataForDiagramState) => {
  const data = {
    labels: [...labeles],
    datasets: [
      {
        data: [...dataArr],
        backgroundColor: [...backgroundColor],
        borderColor: [...borderColor],
        borderWidth,
      },
    ],
  };

  return data;
};

export default getDataForDiagram;
