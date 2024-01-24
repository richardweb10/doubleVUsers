import { put } from "@redux-saga/core/effects";

export function* queryOk(data:any, type_failed:any, type_received:any ): Generator{
    if (Object.prototype.hasOwnProperty.call(data, "status")) {
      yield put({ type: type_failed, error: data })
    } else {
      yield put({ type: type_received, data })
    }
  }
  
export function* querError(error:any, type_failed:any ): Generator{
    if (error.response) {
      if (error.response.status > 499) {
        yield put({ type: type_failed, error: { message: 'Oops! parece que ha habido un fallo, por favor contacte con el soporte en el correo info@refuer.com y lo resolveremos inmediatamente..' } });
      } else if(error.response.data) {
        yield put({ type: type_failed, error: {status: error.response.data.status, message: error.response.data.message} });
      }else{
        yield put({ type: type_failed, error: {status: error.response.status} });
      }
    } else if (error.request) {
      yield put({ type: type_failed, error: { message: 'Hubo un problema para obtener los datos, por favor inténtelo más tarde.' } });
    } else {
      yield put({ type: type_failed, error: { message: 'Oops! parece que ha habido un fallo, por favor contacte con el soporte en el correo info@refuer.com y lo resolveremos inmediatamente..' } });
    }
  }

  export function getFileName(urlImage:string){
    const name = urlImage.split("/")[4];
    return name;
  }