import React, { useCallback, useState } from 'react';
import { Button } from 'react-native-paper';
import { ActivityIndicator, View } from 'react-native';
import { styles } from '@/screens/Home/Home.styles';
import SearchBar from '@/components/SearchBar';
import categories from '@/constants/categories';
import { getNews, Type } from '@/controllers/newsController/news_controller';
import { FlatList } from 'react-native-gesture-handler';
import { ArticleCard } from '@/components/ArticleCard';
import { NAVIGATION } from '@/constants';
import { mapDataWithRandomColor } from '@/utils/ui_utils';

export const Home = ({ navigation }) => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeCategory, setActiveCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('');

  const filterByName = useCallback((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()), [searchQuery])

  const renderItem = ({ item, index }: any) => <View key={index}>
    <ArticleCard backgroundColor={item.color} item={item} onPress={() => {
      navigation.navigate(NAVIGATION.article, {
        item
      });
    }} />
  </View>

  const handleData = useCallback(async (value: string, type: Type) => {
    setIsLoading(true)
    const newsWithRandomColor = (await getNews(value, type)).map(mapDataWithRandomColor)
    setNews(newsWithRandomColor)
    setIsLoading(false)
  }, [])

  const handleSearchQuery = async (value: string) => {
    setSearchQuery(value)
    if (!activeCategory.length) {
      handleData(value, 'q')
    }
  }

  const handleBtnPress = async (name: string) => {
    if (activeCategory === name) {
      setActiveCategory('')
    } else {
      handleData(name, 'category')
      setActiveCategory(name)
    }
  }

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchQuery} />
      <View style={styles.buttonContainer}>
        {categories.map(({ name }) => {
          return <Button onPress={async () => handleBtnPress(name)} labelStyle={styles.labelStyle} style={[styles.button, activeCategory === name && styles.activeButton]} icon={() => <View />} mode="contained" >
            {name}
          </Button>
        })}
      </View>
      <View style={styles.articlesContainer}>
        {isLoading ? <ActivityIndicator style={{ paddingTop: 80 }} size="large" /> : <FlatList
          data={news.filter(filterByName)}
          renderItem={renderItem}
        />}
      </View>
    </View>
  );
}
