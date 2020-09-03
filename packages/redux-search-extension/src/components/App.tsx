import React from 'react';
import JSDive from 'js-dive';
import { Search } from './Search';
import '../styles/global.scss';

console.log({ JSDive });

export const App: React.FC<{}> = () => {
  return (
    <div>
      <Search onSearch={(v: string) => {}} />
    </div>
  );
};
