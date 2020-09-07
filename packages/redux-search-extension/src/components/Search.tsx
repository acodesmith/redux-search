import React, { FC, ChangeEvent } from 'react';

interface SearchProps {
  onSearch: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ onSearch }) => {
  let timeoutId = null;

  return (
    <section className="rs-search-wrapper">
      <label htmlFor="rs-search">Search</label>
      <span className="icon-search" />
      <input
        type="search"
        name="rs-search"
        placeholder="Search"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          let value = e.target.value;
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          setTimeout(() => {
            onSearch(value);
          }, 300);
        }}
      />
    </section>
  );
};
