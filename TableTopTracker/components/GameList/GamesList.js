import React from 'react';
import { View, FlatList } from 'react-native';
import PlaceholderCard from './PlaceholderCard';

const GamesList = ({ games }) => (

  <View style={{ flex: 1, padding: 15 }}>
    <FlatList
      data={ games }
      renderItem={ PlaceholderCard }
      keyExtractor={ (item) => item.id.toString() }
    />
  </View>
);

export default GamesList;