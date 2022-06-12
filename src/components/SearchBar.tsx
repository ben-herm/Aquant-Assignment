import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({searchQuery, setSearchQuery}: any) => {
  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <Searchbar
      style={{
        margin: 16,
        width: '50%'
      }}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;