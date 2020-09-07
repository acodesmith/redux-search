import React, { useState, FC } from 'react';
import JSDive from 'js-dive';
import { DisplaySection } from '../constants';
import { Search } from './Search';
import { Options } from './Options';
import { Visualize } from './Visualize';
// import { OptionToggle } from './OptionToggle';
import '../styles/global.scss';

// temp
import data from '../test-data/data.json';

const diver = new JSDive();

export const App: FC<{}> = () => {
  const [value, setValue] = useState('');
  const [{ match, count, items, notifications }, setResults] = useState({});
  const [display, setDisplay] = useState(DisplaySection.results);
  const displayResults = display === DisplaySection.results && value !== '';

  return (
    <div className="rs-layout">
      <div className="rs-controls">
        <Search
          onSearch={(v: string) => {
            setResults(diver.search(v, data).view());
            setValue(v);
          }}
        />
        {/* <OptionToggle display={display} setDisplay={setDisplay} /> */}
      </div>
      <div className="rs-content">
        {display === DisplaySection.options && <Options />}
        {displayResults && <Visualize items={items} />}
      </div>
    </div>
  );
};
