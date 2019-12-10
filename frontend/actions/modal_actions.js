export const OPEN_MODAL = "OPEN_MODAL"; 
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = formType => ({
    type: OPEN_MODAL,
    formType
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})
