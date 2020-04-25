import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Icon from '@expo/vector-icons/MaterialIcons';

import styles from './styles';

export default function Item(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.handleCheck(props.id)}>
                <Text
                    numberOfLines={1}
                    style={[styles.text,
                    props.check && styles.listCheck]}
                >{props.title}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleDelete(props.id)}>
                <Icon
                    name="delete-forever"
                    size={30}
                    color="#7a1b0c"
                />
            </TouchableOpacity>
        </View>
    );
}
