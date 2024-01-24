import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 16,
    },
    list: {
        margin: 16,
    },
    item: {
        marginVertical: 5,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    link: {
        color: 'blue'
    },
    textBold: {
        fontWeight: 'bold'
    },
    imageCard: {
        alignItems: 'center',
    },
    detailUser: {
        backgroundColor: '#f1f1f1',
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    containerFollower:{
        flex: 1, 
        padding: 20
    },
    containerChart: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    chart: {
        flex: 1,
    }

})