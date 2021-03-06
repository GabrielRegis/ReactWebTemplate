import { combineReducers, Reducer } from 'redux';
import { RootState } from './state';
import { routerReducer, RouterState } from 'react-router-redux';
import rootSagas from './sagas';
import configureStore from './store';
export { RootState, RouterState };

// tslint:disable-next-line:prefer-const

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    router: routerReducer
});

export const createApplicationStore = () => {
    // tslint:disable-next-line:prefer-const
    let { store, sagasManager, sagaMiddleware } = configureStore(rootReducer, rootSagas);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers').reducers;
            store.replaceReducer(nextRootReducer);

            const newYieldedSagas = require('./sagas').default;
            sagasManager.cancel();
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas);
            });
        });
    }

    return store;
};
