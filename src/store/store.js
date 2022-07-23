import { compose, createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { rootReducer } from "./root-reducer"
// import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import { rootsaga } from "./root-saga"
const persisConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}

const sagaMiddleware = createSagaMiddleware()

const persistdReducer = persistReducer(persisConfig, rootReducer)
const middlewares = [process.env.NODE_env !== "production" && logger, sagaMiddleware].filter(Boolean)

const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistdReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootsaga)

export const persistor = persistStore(store)