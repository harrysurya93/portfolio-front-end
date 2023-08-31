import {createStore} from 'redux';

const initialState = {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
}
const ReducerHandler = (state = initialState, action) => {
    if(action.type === 'change_theme'){
        if(state.theme === 'dark'){
            return{
                theme: 'light'
            }
        }
        else if(state.theme === 'light'){
            return{
                theme: 'dark'
            };
        }
    }

    return state;
}

const store = createStore(ReducerHandler);

export default store;