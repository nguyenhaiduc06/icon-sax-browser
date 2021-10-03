import React, { useState } from 'react';
import { IconNames, IconTypes } from './constants/Icons';
import Search from './components/Search';
import SelectIconType from './components/SelectIconType';
import Icon from './components/Icon';
import NavBar from './components/NavBar';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [search, setSearch] = useState('');
  const [iconType, setIconType] = useState(IconTypes.linear);

  return (
    <>
      <div class="bg-gray-100 min-h-screen relative">
        <NavBar />
        <Search search={search} setSearch={setSearch} />
        <SelectIconType iconType={iconType} setIconType={setIconType} />
        <div class="m-auto max-w-screen-lg bg-white rounded-xl mt-4 p-4">
          <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
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
    </>
  );
}

export default App;
