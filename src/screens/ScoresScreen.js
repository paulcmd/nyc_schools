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
import useResults from '../hooks/useResults'
import { useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

const ScoresScreen = () => {
    const { schoolScores } = useResults()
    const { id } = useRoute().params
    //console.log('scores from score screen: ', schoolScores[0])

    const renderScoreScreen = () => {
        const school = schoolScores.filter((schoolObj) => {
            if (schoolObj.school_name.toLowerCase() === id.toLowerCase()) {
                return schoolObj
            }
            return null
        })

        return (
            <>
                <Text style={styles.name}>{id}</Text>
                <FlatList
                    data={school}
                    keyExtractor={(item) => item.school_name}
                    renderItem={({ item }) => {
                        
                        return (
                            <View style={styles.score}>
                                <Text style={styles.scoreText}>
                                    {item ? (
                                        `Critical Reading Score : ${item.sat_critical_reading_avg_score}`
                                    ) : (
                                        <Text>No score data</Text>
                                    )}
                                </Text>
                                <Text style={styles.scoreText}>
                                    {item ? (
                                        `Math Score : ${item.sat_math_avg_score}`
                                    ) : (
                                        <Text>No score data</Text>
                                    )}
                                </Text>
                                <Text style={styles.scoreText}>
                                    {item ? (
                                        `Writing Score : ${item.sat_writing_avg_score}`
                                    ) : (
                                        <Text>No score data</Text>
                                    )}
                                </Text>
                            </View>
                        )
                    }}
                />
            </>
        )
    }

    return (
        <View style={styles.container}>
            {!schoolScores ? <Text>Loading...</Text> : renderScoreScreen()}
        </View>
    )
}

export default ScoresScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
        padding: 10,
        elevation: 1
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 1,
        marginTop: 10,
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    score: {
        marginVertical: 40,
        marginHorizontal: 30,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: 'center'
    },
    scoreText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 10,
        padding: 25,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
})
