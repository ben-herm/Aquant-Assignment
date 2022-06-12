import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from '@/screens/Home/Home.styles';
import SearchBar from '@/components/SearchBar';
import categories from '@/constants/categories';
import { getAllNews, getNews } from '@/controllers/newsController/news_controller';
import { FlatList } from 'react-native-gesture-handler';
import { ArticleCard } from '@/components/ArticleCard';
import { NAVIGATION } from '@/constants';
import { getRandomColor } from '@/utils/ui_utils';

export const Home = ({ navigation }: any) => {
  const [news, setNews] = useState<Array<any>>([])
  const [activeButton, setActiveButton] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [articleColors, setArticleColors] = useState<Array<string>>([]);

  useEffect(() => {
    console.log('popo')
    let colorsArrayFromNews = news.map(() => getRandomColor())
    setArticleColors(colorsArrayFromNews)
  }, [news])

  const renderItem = ({ item, index }: any) => {
    const shouldRender = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    if (shouldRender) {
      return <View key={index}>
        <ArticleCard backgroundColor={articleColors[index]} item={item} onPress={() => {
          navigation.navigate(NAVIGATION.article, {
            item: item
          });
        }} />
      </View>
    }
    return null
  }

  const handleSearchQuery = async (value: string) => {
  
    setSearchQuery(value)

    if (activeButton.length == 0) {
   
      const data = await getAllNews(value)
      setNews(data.sources)
    }
  
    
  }

  const handleBtnPress = async (name: string) => {
    if (activeButton === name) {
      setActiveButton('')
    } else {
      const data = await getNews(name)
      setNews(data.sources)
      setActiveButton(name)
    }

  }

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={(value)=> handleSearchQuery(value)} />
      <View style={styles.buttonContainer}>
        {categories.map(({ name }) => {
          return <Button onPress={async () => handleBtnPress(name)} labelStyle={styles.labelStyle} style={[styles.button, activeButton === name && styles.activeButton]} icon={() => <View />} mode="contained" >
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
