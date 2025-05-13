'use client';

import { useModal } from '@/shared/hooks/useModal';
import { Modal } from '@/shared/ui/Modal/ui/Modal';
import { Form } from '@/features/Form';

export const ModalForm = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Form />
    </Modal>
  );
};
