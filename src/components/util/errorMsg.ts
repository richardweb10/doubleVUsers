import { Alert } from 'react-native';
export const showError = (err: any) => {

    let title = '';
    let msg = '';
    if (err.status === 400) {
        title = 'Error en la operación';
        msg = err.message;
    } else if (err.status === 401) {
        title = 'Ocurrio un error';
        msg = 'Por favor revisa los datos ingresados y vuelve a intentar.';
    } else {
        title = 'Ocurrio un error';
        msg = 'Por favor contacta a soporte en el correo';
    }
    Alert.alert(
        title,
        msg,
        [{ text: 'OK', onPress: () => console.log("error") }],
    );
}