import React from 'react';
import Modal from 'react-modal';
import Button from './Button';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 48,
  },
};

export default function Icon({ iconType, iconName }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div
        onClick={openModal}
        class="flex flex-col items-center justify-center rounded py-4 px-2 cursor-pointer bg-white border border-transparent hover:border-blue-400 ease-in-out transition-all duration-300"
      >
        <img
          src={require(`../assets/${iconType}/${iconName}`).default}
          alt={iconName}
        />
        <p class="text-center text-xs mt-2 truncate w-full text-gray-400">
          {iconName.split('.')[0]}
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div class="flex flex-col items-center">
          <img
            src={require(`../assets/${iconType}/${iconName}`).default}
            alt={iconName}
            style={{
              width: 96,
              height: 96,
            }}
            class="border p-4 rounded-xl"
          />
          <div class="flex flex-row items-center border rounded-lg overflow-hidden mt-4">
            <p class="text-xl font-medium text-gray-900 px-4">
              {iconName.split('.')[0]}
            </p>
            <Button
              icon="linear|copy"
              title="Copy name"
              onClick={() => {
                navigator.clipboard.writeText(iconName);
                alert(`Copied ${iconName} to clipboard`);
              }}
            />
            <a
              href={require(`../assets/${iconType}/${iconName}`).default}
              download
              class="flex flex-row items-center"
            >
              <Button icon="linear|arrow-down-1" title="Download SVG" />
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}
