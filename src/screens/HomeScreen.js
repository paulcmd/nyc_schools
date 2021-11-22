import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button,
    FlatList
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import useResults from '../hooks/useResults'

const HomeScreen = () => {

    const navigation = useNavigation()

    const { schools } = useResults()
    //console.log(schools)

    return (
        <View style={styles.container}>
            <FlatList
                data={schools}
                keyExtractor={(item) => item.dbn}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Scores', { id: item.school_name })
                            }
                        >
                            <View style={styles.school}>
                                <Text style={styles.schoolTitle}>
                                    {item.school_name}
                                </Text>
                                
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    school: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        flexDirection: 'row',
    },
    schoolTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    }
})

export default HomeScreen
