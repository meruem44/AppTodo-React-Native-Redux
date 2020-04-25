import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    header: {
        paddingTop: StatusBar.currentHeight + height * 0.02,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginBottom: height * 0.04
    },
    input: {
        flex: 1,
        fontSize: 30,
        color: '#fff',
        paddingLeft: 20,
    },
    button: {
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listCheck: {
        textDecorationLine: 'line-through'
    }
});

export default styles;