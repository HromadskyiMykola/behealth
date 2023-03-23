import { createContext, useState } from "react";

interface IModalState {
  openMainModal: boolean;
  handleMainModalOpen: () => void;
  handleMainModalClose: () => void;

  openThanksModal: boolean;
  handleThanksModalOpen: () => void;
  handleThanksModalClose: () => void;
}

export const useModalState = (): IModalState => {
  const [openMainModal, setOpenMainModal] = useState(false);
  const handleMainModalOpen = () => setOpenMainModal(true);
  const handleMainModalClose = () => setOpenMainModal(false);

  const [openThanksModal, setOpenThanksModal] = useState(false);
  const handleThanksModalOpen = () => setOpenThanksModal(true);
  const handleThanksModalClose = () => setOpenThanksModal(false);

  return {
    openMainModal,
    handleMainModalOpen,
    handleMainModalClose,

    openThanksModal,
    handleThanksModalOpen,
    handleThanksModalClose,
  };
};

export const ModalContext = createContext<IModalState>({
  openMainModal: false,
  handleMainModalOpen: () => {},
  handleMainModalClose: () => {},

  openThanksModal: false,
  handleThanksModalOpen: () => {},
  handleThanksModalClose: () => {},
});
