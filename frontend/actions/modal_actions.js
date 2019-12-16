export const OPEN_MODAL = "OPEN_MODAL"; 
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (formType, message) => {
    return {
        type: OPEN_MODAL,
        formType,
        message
    }
};

export const closeModal = () => ({
    type: CLOSE_MODAL
})
