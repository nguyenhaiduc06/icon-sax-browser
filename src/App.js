import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Icon from './components/Icon';
import { IconNames, IconTypes } from './constants/Icons';
import capitalize from './helpers/capitalize';

function App() {
  const [search, setSearch] = useState('');
  const [iconType, setIconType] = useState(IconTypes.twotone);

  return (
    <div class="bg-gray-100 min-h-screen">
      <NavBar search={search} setSearch={setSearch} />
      <div class="m-auto max-w-screen-lg bg-white rounded-lg mt-4 p-4">
        <div class="flex flex-row items-center">
          {Object.keys(IconTypes).map((key, index) => (
            <div
              class={`mr-2 cursor-pointer hover:text-blue-400 ${
                key == iconType ? 'text-blue-500' : ''
              }`}
              key={index}
              onClick={() => setIconType(key)}
            >
              {capitalize(key)}
            </div>
          ))}
        </div>
        <div class="grid grid-cols-8 gap-4 mt-4">
          {IconNames[iconType].map((iconName, index) => (
            <>
              {iconName.includes(search) && (
                <Icon key={index} iconType={iconType} iconName={iconName} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
