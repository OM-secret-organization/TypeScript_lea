import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selector?: string;
}

const Portal: React.FC<Props> = ({ children }: any) => {
  const rootElement = document.getElementById('#modal-root');

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
