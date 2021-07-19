const type = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL'
}

export default type;

export const openModal = (id) => {
    return { type: type.OPEN_MODAL, payload: {id} };
}

export const closeModal = () => {
    return { type: type.CLOSE_MODAL};
}