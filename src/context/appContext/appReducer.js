/* eslint-disable no-case-declarations */
import { SELECT_LANGUAGE, SELECT_THEME } from "../actions";
import { arrayThemes } from "../../utils/index";
export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case SELECT_LANGUAGE:
            return {
                ...state,
                descriptionApp: payload
            }
        case SELECT_THEME:
            const colorSelected = arrayThemes.filter(theme => {
                if (theme.id === payload) {
                    return theme.code;
                }
            })
            const codeSelected = colorSelected.map(color => {
                return color.code
            })
            const darkCodeSelected = colorSelected.map(color => {
                return color.darkCode
            })
            return {
                ...state,
                themes: codeSelected,
                themeDark: darkCodeSelected
            }
    }
}