import React from 'react';

export default function Search({ search, setSearch, iconType, setIconType }) {
  return (
    <div class="flex flex-row items-center max-w-screen-sm m-auto bg-white px-4 py-2 rounded-xl mt-4">
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
      />
      {search.length > 0 && (
        <img
          src={require(`../assets/bold/close-circle.svg`).default}
          alt="close-circle"
          class="cursor-pointer"
          onClick={() => setSearch('')}
        />
      )}
    </div>
  );
}
