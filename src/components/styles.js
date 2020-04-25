import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#ffff',
        width: width *0.9,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: height * 0.02,
        paddingHorizontal: 10,
        borderRadius: 20,
        height: height * 0.08
    },
    button: {
        width: '80%',
        justifyContent: 'center'
    },
    text: {
        color: '#444',
        fontSize: 28,
        fontWeight: '500'
    },
    listCheck: {
        textDecorationLine: 'line-through'
    }
});

export default styles;