import { movieById } from 'interface/IMovieById';
import React from 'react';

interface IModalContext {
  modalData: Array<movieById>;
  isLoading: boolean;
}
export const ModalContext = React.createContext<IModalContext>({
  modalData: [],
  isLoading: true,
});

export default ModalContext;
