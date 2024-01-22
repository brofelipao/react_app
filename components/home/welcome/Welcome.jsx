import React from 'react'
import { 
  View,
  Text,
  TextInput, 
  TouchableOpacity,
  Image, 
  FlatList // dropdown list
} from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES  } from '../../../constants'

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Olá, Luiz!</Text>
        <Text style={styles.welcomeMessage}>Encontre uma vaga de emprego.</Text>
      </View>

      <View style={styles.searchContainer} >
        <View style={styles.searchWrapper} >
          <TextInput 
            style={styles.searchInput} 
            value=''
            onChange={() => {

            }}
            placeholder='O que você está procurando?'/>
        </View>
      </View>
    </View>
  )
}

export default Welcome