import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './movies_styles';


const MOVIE = () => {
  const [isLoading, setLoading] = useState(true);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
      .then((response) => response.json())
      .then((json) => {setFilteredDataSource(json); setMasterDataSource(json);})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.Title
            ? item.Title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const renderItem = ({ item }) => {
    return (
    <View style={styles.list} >
      <TouchableOpacity onPress={() => getItem(item)}>
      <Text style={styles.title}>{item.Title.toUpperCase()}</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{uri: item.Images[0]}} resizeMode='cover'/>
    </View>
    );
  };


  const getItem = (item) => {
    // Function for click on an item
    alert('Year : ' + item.Year +'. Actors : '+ item.Actors + '. Plot : ' + item.Plot);
  };


  return (

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Enter the movie..."
      />
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={styles.renderitem}>
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      )}
    </View>
  );
};

export default MOVIE;