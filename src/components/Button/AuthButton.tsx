import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOR, HEIGHT, WIDTH } from '../../AppConstant'

const AuthButton = ({title,ButtonStyle,onPress}:any) => {
  return (
    <TouchableOpacity 
    style={[ButtonStyle,styles.body]}
    onPress={onPress}
    >
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default AuthButton

const styles = StyleSheet.create({
    body:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLOR.light.backgroundColor,
        height:HEIGHT * 0.05,
        width:WIDTH * 0.6,
        marginVertical:HEIGHT * 0.008,
        borderRadius: 50
    }
})