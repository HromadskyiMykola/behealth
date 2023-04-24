import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type TSimpleModalMessage = { loading: true } | ReactNode;

interface IModalContext {
  openMainModal: boolean;
  setOpenMainModal: Dispatch<SetStateAction<boolean>>;

  simpleModalMessage: TSimpleModalMessage;
  setSimpleModalMessage: Dispatch<SetStateAction<TSimpleModalMessage>>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const useModalState = () => useContext(ModalContext);

export const ModalStateProvider = ({ children }: { children: ReactNode }) => {
  const [openMainModal, setOpenMainModal] = useState(false);

  const [simpleModalMessage, setSimpleModalMessage] =
    useState<TSimpleModalMessage>(null);

  const value = {
    openMainModal,
    setOpenMainModal,

    simpleModalMessage,
    setSimpleModalMessage,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
