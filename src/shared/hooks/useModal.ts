'use client';
import { useContext } from 'react';
import { ModalContext } from '@/shared/lib/modal-context';

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a usersProvider');
  }

  return context;
};
