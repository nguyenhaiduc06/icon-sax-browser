import React from 'react';
import { IconTypes } from '../constants/Icons';
import capitalize from '../helpers/capitalize';

export default function Search({ search, setSearch, iconType, setIconType }) {
  return (
    <div class="flex flex-row items-center max-w-screen-lg m-auto bg-white px-4 py-2 rounded mt-4">
      <img
        src={require(`../assets/linear/search-normal-1.svg`).default}
        alt="search-icon"
      />
      <input
        class="focus:outline-none rounded flex-1 ml-4 p-2"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{flex: 2}}
      />
      {search.length > 0 && (
        <img
          src={require(`../assets/bold/close-circle.svg`).default}
          alt="close-circle"
          class="cursor-pointer"
          onClick={() => setSearch('')}
        />
      )}
      <select onChange={(e) => setIconType(e.target.value)} class="ml-4 flex-1">
        {Object.keys(IconTypes).map((key, index) => (
          <option value={key}>{capitalize(key)}</option>
        ))}
      </select>
    </div>
  );
}
