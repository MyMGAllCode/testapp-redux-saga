import { takeEvery,take,call, put} from 'redux-saga/effects';

//Worker Saga
function* workerSaga(){
    console.log('Worker Saga called');
}

function* loginWorkerSaga(){
    console.log('Login Worker Saga called');
    yield put({type:"Loggedin"});
}

//watcher saga 
function* rootSaga(){
    console.log('rootSaga called');
    //yield takeEvery('HELLO',workerSaga);
    //yield takeEvery('LOGIN',workerSaga);
    yield take('LOGIN');
    yield call(loginWorkerSaga);

}
export default rootSaga;