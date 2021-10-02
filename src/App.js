import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Icon from './components/Icon';
import icons from './icons';

function App() {
  const [search, setSearch] = React.useState('');
  return (
    <div class="bg-gray-100 min-h-screen">
      <NavBar search={search} setSearch={setSearch} />
      <div class="m-auto max-w-screen-lg bg-white rounded-lg mt-4 p-4">
        Icons
        <div class="grid grid-cols-8 gap-4 mt-4">
          {icons.linear.map((icon, index) => (
            <>{icon.includes(search) && <Icon key={index} iconName={icon} />}</>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
