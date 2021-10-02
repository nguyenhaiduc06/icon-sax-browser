import React from 'react';

export default function Icon({ iconName }) {
  return (
    <div class="flex flex-col items-center justify-center bg-gray-200 rounded p-2 cursor-pointer">
      <img src={require(`../..//assets/linear/${iconName}`).default} alt={iconName} />
      <p class="text-center text-xs mt-2 truncate w-full">{iconName.split('.')[0]}</p>
    </div>
  );
}
