import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';;
const SearchBar = ({searchQuery, setSearchQuery}: any) => {
  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <Searchbar
      style={{
        margin: 16,
        width: '50%'
      }}
      placeholder="Search"
      icon = {()=> <Icon size={20} name={'search'} solid/>}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;