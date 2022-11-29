import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6b6b6b',
        fontSize: 16,
    },
    input: {
        flex: 1,
        backgroundColor: '#1F1e25',
        height: 56,
        borderRadius: 6,
        color: '#fff',
        padding: 16,
        fontSize: 16,  
        marginRight: 12,      
    },
    btn: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent:'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 24,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },
    listEmptyText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    }

})