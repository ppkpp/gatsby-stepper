const initialState = {
    formData: {}
};

const reducer = (state , action) => {
    switch (action.type) {
        case 'CREATE':
            return {
                ...state,
                formData:action.payload
            }
        case 'UPDATE':
        return {
            ...state,
            formData: {...state.formData, ...action.payload}
        }
       
        default:
                        return state
    }
}
export default reducer;