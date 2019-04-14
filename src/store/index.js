import {createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducres from '../components/reducers/index'
import rootSaga from '../saga';

const configureStore =()=>{
    const sagaMiddleware =createSagaMiddleware();
    const store =createStore(
        allReducres,
        compose(
            
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
    sagaMiddleware.run(rootSaga);
    //store.dispatch({type:'HELLO'});
    return store;

}
export default configureStore;