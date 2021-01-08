import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../assets/Login-amico.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 310,
    height: 310,
    marginBottom: 8,
  },
})

export default Logo
