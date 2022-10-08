import { useState, useEffect } from 'react';
import { useGetAllItemsQuery } from 'redux/store/storeApi';
import { IItem } from 'types/IStore';

const useStore = () => {
  const [items, setItems] = useState<null | undefined | IItem[]>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [allImages, setAllImages] = useState(0);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [currentTitle, setCurrentTitle] = useState<null | string>(null);
  const [currentId, setCurrentId] = useState<null | string>(null);

  const { data, isFetching } = useGetAllItemsQuery({ page, limit: 9 });

  useEffect(() => {
    if (data !== undefined) {
      if (page === 1) {
        setItems(data?.items);
        setTotal(data?.total);
        setAllImages(data.items.length);
      }

      if (page !== 1) {
        setItems(data.items);
        setAllImages(prevState => prevState + data.items.length);
      }
    }
  }, [data, page]);

  const showMore = () => setPage(prevState => prevState + 1);

  const comeBack = () => setPage(prevState => prevState - 1);

  const openModal = (e: React.MouseEvent<HTMLLIElement>) => {
    const id = e.currentTarget.dataset.id;
    const title = e.currentTarget.children[0].children[0].textContent;

    setCurrentTitle(title);
    setShowMoreDetails(true);

    if (id) {
      setCurrentId(id);
    }
  };

  const closeModal = () => setShowMoreDetails(false);

  return {
    showMore,
    comeBack,
    openModal,
    items,
    page,
    total,
    allImages,
    showMoreDetails,
    currentTitle,
    currentId,
    isFetching,
    closeModal,
  };
};

export default useStore;
