import React from 'react';
import { StyleSheet,Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) {

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }

    const [reviews, setReviews] = useState([
        {title: 'Game of Thrones', rating: 4, body:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO', key: 1},
        {title: 'House of the Dragon', rating: 5, body:'House of the Dragon is an American fantasy drama television series. An independent prequel to Game of Thrones (2011–2019)', key: 2},
        {title: 'Zelda: Breath of the Wild', rating: 5, body:'The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles', key: 3},
    ]);

    return (
    <View style={globalStyles.container}>
        <FlatList
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    </View>   
    )
}

