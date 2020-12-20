import React from 'react';
import { View, Text, TextInput, Modal, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert, ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import StackNavigator from '../components/StackNavigator'

export default class RequesterDetails extends React.Component {
    render() {
        return(
            <View>
                <Header
                title = "Requester Details"
                />
            </View>
        )
    }
}