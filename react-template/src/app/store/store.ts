// import { Store, createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { routerMiddleware } from 'react-router-redux';
// import { History } from 'history';
// import { logger } from 'app/middleware';
// import { RootState, rootReducer } from 'app/reducers';

import { applyMiddleware, compose, createStore, Reducer, Middleware, StoreCreator, Store, StoreEnhancer } from 'redux';
import sagaMiddlewareFactory, { Monitor, SagaIterator, SagaMiddleware } from 'redux-saga';
import { RootState } from './reducers';

export default (rootReducer: Reducer<RootState>, rootSaga: () => SagaIterator) => {
    const middleware: Middleware[] = [];
    const enhancers: StoreEnhancer[] = [];

    const sagaMiddleware: SagaMiddleware<Monitor> = sagaMiddlewareFactory();

    middleware.push(sagaMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    const createAppropriateStore: StoreCreator = createStore;

    const composeEnhancers = compose;

    const store: Store<RootState> = createAppropriateStore(rootReducer, composeEnhancers(...enhancers));

    const sagasManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagasManager,
        sagaMiddleware
    };
};
// export function configureStore(history: History, initialState?: RootState): Store<RootState> {
//     let middleware = applyMiddleware(logger, routerMiddleware(history));

//     if (process.env.NODE_ENV !== 'production') {
//         middleware = composeWithDevTools(middleware);
//     }

//     const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>;

//     if (module.hot) {
//         module.hot.accept('app/reducers', () => {
//             const nextReducer = require('app/reducers');
//             store.replaceReducer(nextReducer);
//         });
//     }

//     return store;
// }
