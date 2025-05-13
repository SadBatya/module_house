'use client';

import { ReactNode } from 'react';
import style from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useBodyScrollLock } from '@/shared/hooks/useBodyScrollLock';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: string | ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;
  return createPortal(
    <div className={style.modal_overlay} onClick={onClose}>
      <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
        <div onClick={onClose} className={style.close_button} />
        {children}
      </div>
    </div>,
    document.body
  );
};
