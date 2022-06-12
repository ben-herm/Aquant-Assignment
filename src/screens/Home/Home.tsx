import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from '@/screens/Home/Home.styles';
import SearchBar from '@/components/SearchBar';
import categories from '@/constants/categories';
import { getNews } from '@/controllers/newsController/news_controller';
import { FlatList } from 'react-native-gesture-handler';
import { ArticleCard } from '@/components/ArticleCard';
import { NAVIGATION } from '@/constants';
import { getRandomColor } from '@/utils/ui_utils';

export const Home = ({ navigation }: any) => {
  const [isLoading, setLoading] = useState(true);
  const [news, setNews] = useState([])
  const [activeButton, setActiveButton] = useState('')
  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({ item }: any) => {
    const shouldRender = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    const getColor = getRandomColor()
    if (shouldRender) {
      return <ArticleCard backgroundColor={getColor} item={item} onPress={() => {
        navigation.navigate(NAVIGATION.article, {
        item: item
        });
      }} />
    }
    return null
  }

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View style={styles.buttonContainer}>
        {categories.map(({ name }) => {
          return <Button onPress={async () => {
            setLoading(true)
            const data = await getNews(name)
            setNews(data.sources)
            setActiveButton(name)
            setLoading(false)
          }} labelStyle={styles.labelStyle} style={[styles.button, activeButton === name && styles.activeButton]} icon={() => <View />} mode="contained" >
            {name}
          </Button>
        })}
      </View>
      <View style={styles.articlesContainer}>
        {<FlatList
          data={news}
          renderItem={renderItem}
        />}
      </View>
    </View>
  );
}
