import React from 'react';

export default function Icon({ iconType, iconName }) {
  return (
    <div class="flex flex-col items-center justify-center rounded py-4 px-2 cursor-pointer bg-white border border-transparent hover:border-blue-400 ease-in-out transition-all duration-300">
      <img src={require(`../assets/${iconType}/${iconName}`).default} alt={iconName} />
      <p class="text-center text-xs mt-2 truncate w-full text-gray-400">{iconName.split('.')[0]}</p>
    </div>
  );
}
