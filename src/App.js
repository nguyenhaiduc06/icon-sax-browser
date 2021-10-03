import React, { useState } from 'react';
import { IconTypes } from './constants/Icons';
import Search from './components/Search';
import SelectIconType from './components/SelectIconType';
import NavBar from './components/NavBar';
import Modal from 'react-modal';
import ListIcons from './components/ListIcons';

Modal.setAppElement('#root');

function App() {
  const [search, setSearch] = useState('');
  const [iconType, setIconType] = useState(IconTypes.linear);

  return (
    <div class="bg-gray-100 min-h-screen relative">
      <NavBar />
      <Search search={search} setSearch={setSearch} />
      <SelectIconType iconType={iconType} setIconType={setIconType} />
      <ListIcons iconType={iconType} search={search} />
    </div>
  );
}

export default App;
