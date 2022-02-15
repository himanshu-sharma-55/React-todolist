
const Items = [{
    id: 1,
    task: "Jogging"
}]

const ItemOperations = (state = Items, action) => {
  
    switch(action.type) {

        case "ADD_TODO" : {
            return [...state, action.payload]
        }

        case "REMOVE_TODO" : {
            return state = state.filter( (item) => (item.id) !== (action.payload))
        }

        default :  return state
    }
}

export default ItemOperations