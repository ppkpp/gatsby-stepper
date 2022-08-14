export const reset = () => {
    return {
        type: 'RESET',
    }
}

export const createData = (formData) =>{
    return {
        type: 'CREATE',
        payload: formData
    }
}

export const updateData = (formData) => {
    return {
        type: 'UPDATE',
        payload: formData
    }
}