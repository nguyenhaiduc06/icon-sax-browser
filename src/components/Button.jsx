import React from 'react';

export default function Button({ icon, title, onClick }) {
  const [iconType, iconName] = icon.split('|');
  return (
    <div
      onClick={onClick}
      class="flex flex-row items-center bg-blue-50 px-4 py-2 hover:bg-blue-200 hover:text-white cursor-pointer ease-in-out transition-all duration-300"
    >
      <img
        src={require(`../assets/${iconType}/${iconName}.svg`).default}
        alt={iconName}
        style={{
          color: 'white',
        }}
      />
      {/* <div>{title}</div> */}
    </div>
  );
}
