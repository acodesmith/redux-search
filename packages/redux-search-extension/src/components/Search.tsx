import React from 'react';

interface SearchProps {
  onSearch: (value: string) => void;
}

export const Search: React.FC<SearchProps> = () => {
  return (
    <section className="rs-search-wrapper">
      <label htmlFor="rs-search">Search</label>
      <input type="search" name="rs-search" />
    </section>
  );
};
