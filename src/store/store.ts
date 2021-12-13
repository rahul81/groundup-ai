import { applyMiddleware, createStore } from "redux";
import reducers from './reducers';
import thunk from 'redux-thunk';
import { useDispatch } from "react-redux";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)
