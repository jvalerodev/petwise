import React, { type MouseEvent } from 'react';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isVisible, onClose, children }: Props) => {
  if (!isVisible) return null;

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (target.id === 'modal') {
      onClose();
    }
  };

  return (
    <div
      id="modal"
      onClick={handleClose}
      className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
    >
      <div className="flex flex-col w-[700px] bg-white px-5 py-3 rounded-md">
        <div className="place-self-end">
          <button onClick={onClose} className="text-teal-500 text-xl font-bold">
            X
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
