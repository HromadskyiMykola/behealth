import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IModalContext {
  openMainModal: boolean;
  handleMainModalOpen: () => void;
  handleMainModalClose: () => void;
  
  openThanksModal: boolean;
  handleThanksModalOpen: () => void;
  handleThanksModalClose: () => void;
  
  openSimpleModal: boolean;
  handleSimpleModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const useModalState = () => useContext(ModalContext);

export const ModalStateProvider = ({ children }: { children: ReactNode }) => {
  const [openMainModal, setOpenMainModal] = useState(false);
  const handleMainModalOpen = () => setOpenMainModal(true);
  const handleMainModalClose = () => setOpenMainModal(false);

  const [openThanksModal, setOpenThanksModal] = useState(false);
  const handleThanksModalOpen = () => setOpenThanksModal(true);
  const handleThanksModalClose = () => setOpenThanksModal(false);

  const [openSimpleModal, handleSimpleModalOpen] = useState(false);

  const value = {
    openMainModal,
    handleMainModalOpen,
    handleMainModalClose,

    openThanksModal,
    handleThanksModalOpen,
    handleThanksModalClose,

    openSimpleModal,
    handleSimpleModalOpen,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

