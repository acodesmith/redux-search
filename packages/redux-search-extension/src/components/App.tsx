import React, { useEffect, useState, FC } from 'react';
import JSDive from 'js-dive';
import { DisplaySection } from '../constants';
import { Search } from './Search';
import { Options } from './Options';
import { Visualize } from './Visualize';
import '../styles/global.scss';

// temp
import data from '../test-data/data.json';

declare global {
  interface Window {
    respond: (msg: string) => void;
  }
}

const diver = new JSDive();

export const App: FC<{}> = () => {
  const [value, setValue] = useState('');
  const [{ items }, setResults] = useState({});
  const [display, setDisplay] = useState(DisplaySection.results);
  const displayResults = display === DisplaySection.results && value !== '';

  useEffect(() => {
    document.addEventListener('syncState', (a) => {
      console.log('the react app can sync the state', a);
    });
  });

  return (
    <div className="rs-layout">
      <div className="rs-controls">
        <Search
          onSearch={(v: string) => {
            setResults(diver.search(v, data).view());
            setValue(v);
          }}
        />
      </div>
      <div className="rs-content">
        {display === DisplaySection.options && <Options />}
        {displayResults && <Visualize items={items} />}
      </div>
    </div>
  );
};
