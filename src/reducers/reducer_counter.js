const initial_counter = {
    counter: 0
}

export default function(state = initial_counter , action) {
    switch(action.type) {
        case 'ADD':
            return {
                counter : state.counter + 1
            }
        case 'SUBTRACT':
        return {
            counter : state.counter - 1
        }
    }
    return state;
}