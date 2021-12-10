import { applyMiddleware, createStore } from "redux";
import reducers from './reducers';
import thunk from 'redux-thunk';
import { useDispatch } from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)
