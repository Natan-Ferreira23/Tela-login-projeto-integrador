import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>

            <View style={styles.container2}>
                <Image style={styles.imagem} source={require('../../Images/logo.png')}></Image>
                <Text style={{ fontSize: 19 }}> Realizar login </Text>
                <TextInput style={styles.campoInput} defaultValue='E-mail' />
                <TextInput style={styles.campoInput} defaultValue='senha' />
                <Text style={{ fontSize: 20, color: 'black' }}>
                    Esqueceu a senha?
                </Text>
                <TouchableOpacity style={styles.botao}>
                    <Text style={{
                        color: '#f5f3f5',
                        textAlign: 'center',
                        padding: 10,
                        fontSize: 19,
                    }}>Logar</Text>
                </TouchableOpacity>
                <Image style={styles.imagem2} source={require('../../Images/imagemIlustrativa.png')}></Image>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                }}>
                    Você não tem uma conta ?
                </Text>
                <Text style={{
                    color: '#f5f3f5',
                    textAlign: 'center',
                    fontSize: 16,
                }}>
                    Crie uma conta
                </Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffca08',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 22,
    },
    imagem: {
        width: 300,
        height: 100
    },
    campoInput: {
        backgroundColor: '#f5f3f5',
        borderRadius: 20,
        width: 320,
        height: 50,
        padding: 14,
    },
    botao: {
        backgroundColor: '#000000',
        width: 320,
        height: 50,
        borderRadius: 20,
    },
    imagem2: {
        width: 200,
        height: 200,
    }
});
