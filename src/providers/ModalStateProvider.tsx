import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// type TSimpleModalMessage = { loading: true } | ReactNode;

interface IModalContext {
  openMainModal: boolean;
  setOpenMainModal: Dispatch<SetStateAction<boolean>>;

  simpleModalMessage: ReactNode;
  setSimpleModalMessage: Dispatch<SetStateAction<ReactNode>>;

  simpleModalLoading: boolean;
  setSimpleModalLoading: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const useModalState = () => useContext(ModalContext);

export const ModalStateProvider = ({ children }: { children: ReactNode }) => {
  const [openMainModal, setOpenMainModal] = useState(false);

  const [simpleModalMessage, setSimpleModalMessage] = useState<ReactNode>(null);
  
  const [simpleModalLoading, setSimpleModalLoading] = useState<boolean>(false);

  const value = {
    openMainModal,
    setOpenMainModal,

    simpleModalMessage,
    setSimpleModalMessage,

    simpleModalLoading,
    setSimpleModalLoading,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
