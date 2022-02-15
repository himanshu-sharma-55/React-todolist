export const addItem = (todo) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: todo.id,
            task: todo.task,
        }
    }
}

export const removeItem = (id) => {
    return {
        type: "REMOVE_TODO",
        payload: id
    }
}
