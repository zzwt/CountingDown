// import checkPropTypes from 'check-prop-types';
// import {rootReducer} from '../../src/reducers/mainReducers';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

export function findTestAttr(wrapper, attrName){
  return wrapper.find(`[data-test="${attrName}"]`);
}

// export function checkProps(component, conformingProps) {
//   const propError = checkPropTypes(
//     component.propTypes,
//     conformingProps,
//     'prop',
//     component.name);
//   expect(propError).toBeUndefined();
// }

// export const storeFactory = (initialState) =>{
//   return createStore(rootReducer, initialState, applyMiddleware(thunk));
// }