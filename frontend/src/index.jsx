import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//Middlewares
import promise from 'redux-promise'
//Middleware Serve para disparar várias actions (não aguarda o fim das actions para executar as próximas)
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import Reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(Reducers, devTools)
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app')
)