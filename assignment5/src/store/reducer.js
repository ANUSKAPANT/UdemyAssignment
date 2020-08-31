export const initialState = {
    persons: []
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
           
            return {
                persons : [...state.persons, newPerson]    
            }

        case 'DELETE':
            const persons = state.persons.filter(person => person.id !== action.id)
            return {
                persons
            }
            
        default:
            return state
    }
};

export default reducer;