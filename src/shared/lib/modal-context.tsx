'use client';
import { ReactNode, useState, createContext } from 'react';

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const value = { isOpen, openModal, closeModal };

  return <ModalContext value={value}>{children}</ModalContext>;
};
