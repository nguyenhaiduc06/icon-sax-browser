import React from 'react';

export default function NavBar({search, setSearch}) {
  return (
    <div class="bg-white py-4">
      <div className="m-auto flex flex-row items-center justify-between max-w-screen-lg">
        <div class="text-xl font-bold text-gray-900">Iconsax Browser</div>
        <input
          class="border rounded border-gray-400 flex-1 ml-4 p-2"
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
