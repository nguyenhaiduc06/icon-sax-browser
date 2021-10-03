import React from 'react';
import { IconNames } from '../constants/Icons';
import Icon from './Icon';

export default function ListIcons({ iconType, search }) {
  return (
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
  );
}
