/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { AppContext, AppReducer } from './index';
import { SELECT_LANGUAGE, SELECT_THEME } from "../actions"
import initialState from '../initialState';
const AppState = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const español = initialState[0].descriptions.español;
    const english = initialState[0].descriptions.english;
    function selectLanguage(state) {
        let language;
        if (state === false) {
            language = español;
        } else {
            language = english;
        }
        dispatch({
            type: SELECT_LANGUAGE,
            payload: language
        })
    }
    function selectTheme(id) {
        dispatch({
            type: SELECT_THEME,
            payload: id
        })
    }
    const contextValues = {
        descriptionApp: state.descriptionApp,
        themeDark: state.themeDark,
        themes: state.themes,
        selectLanguage,
        selectTheme
    }
    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppState