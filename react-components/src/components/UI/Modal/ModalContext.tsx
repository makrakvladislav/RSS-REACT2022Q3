import { movieById } from 'interface/IMovieById';
import React, { useContext } from 'react';

interface IModalContext {
  modalData: Array<movieById>;
  isLoading: boolean;
}
export const ModalContext = React.createContext<IModalContext>({
  modalData: [],
  isLoading: true,
});

export const useModalContext = () => useContext(ModalContext);

export default ModalContext;
