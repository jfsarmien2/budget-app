import modalType from '../action/modal.action';

const reducer = (state = {isOpen: false}, action) => {
    switch (action.type) {
        case modalType.OPEN_MODAL:
            return {...state, isOpen: true, id: action.payload.id}
        case modalType.CLOSE_MODAL:
            return { ...state, isOpen: false, id: null};
        default:
            return state;
    }
}

export default reducer;