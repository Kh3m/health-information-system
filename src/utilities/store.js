export const updateObject = (state, update) => {
    return {
        ...state,
        ...update
    }
}