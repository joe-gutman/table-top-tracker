
import React, {useState, useEffect} from 'react';
import styles from './styles'
import {Text, View, CheckBox, ScrollView } from 'react-native';
import axios from 'axios'

export default function UserSettings ({navigation, route, user}) {
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [age, setAge] = useState();
    const [playStyle, setPlayStyle] = useState()
    const [favorite, setFavorite] = useState();
    const [creature, setCreature] = useState()
    const [categories, setCategories] = useState([]);

    const [leftCol, setLeftCol] = useState([])
    const [rightCol, setRightCol] = useState([])


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            axios.get(`http://localhost:3000/users?email=${user.email}`)
                .then((res) => {
                    const userInfo = res.data.userData
                    console.log("data from get: ", res.data.userData)
                    setName(userInfo.fullname)
                    setUsername(userInfo.username)
                    setAge(userInfo.age)
                    setPlayStyle(userInfo.preferred_playstyle)
                    setFavorite(userInfo.favorite_board_game)
                    setCreature(userInfo.favorite_mythical_creature)
                    setCategories(userInfo.selectedcategories)
                })
                .catch((err) => {
                    console.error(err)
                })
        })
        return unsubscribe;
    }, [navigation])

    return (
        <ScrollView contentContainerStyle = {styles.MainContainer}>
            <View style={styles.InnerContainer}>
                <View style = {styles.circleContainer}>

                </View>
                <View style = {styles.NameContainer}>
                    <Text style = {styles.NameText}>
                        {name}
                    </Text>
                </View>
                <View style = {styles.NameContainer}>
                    <Text style = {styles.InputText}>
                        {username}
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.InputText}>
                        Age:
                    </Text>
                    <Text style = {styles.InputText}>
                        {age}
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.InputText}>
                        Preferred Play Style:
                    </Text>
                    <Text style = {styles.InputText}>
                        {playStyle}
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.InputText}>
                        Mythical Creature:
                    </Text>
                    <Text style = {styles.InputText}>
                        {creature}
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.InputText}>
                        Favorite Game:
                    </Text>
                    <Text style = {styles.InputText}>
                        {favorite}
                    </Text>
                </View>
                <View style={styles.MainCategoryContainer}>
                    <View style={styles.CategoryColumn}>
                        {leftCol.map((category) => (
                        <View key={category} style={styles.eachCategory}>
                            <CheckBox value={true} />
                            <Text>{category}</Text>
                        </View>
                        ))}
                    </View>
                    <View style={styles.CategoryColumn}>
                        {rightCol.map((category) => (
                            <View key={category} style={styles.eachCategory}>
                                <CheckBox value={true} />
                                <Text>{category}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}