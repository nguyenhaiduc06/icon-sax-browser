import React from 'react';
import { IconTypes } from '../constants/Icons';
import capitalize from '../helpers/capitalize';

export default function SelectIconType({ iconType, setIconType }) {
  return (
    <div class="flex flex-row items-center justify-center mt-4">
      {Object.keys(IconTypes).map((key, index) => (
        <div
          key={index}
          class={`mx-2 py-2 px-4 rounded-xl cursor-pointer ${iconType == key ? 'font-semibold bg-white' : ''}`}
          onClick={() => setIconType(key)}
        >
          {capitalize(key)}
        </div>
      ))}
    </div>
  );
}
