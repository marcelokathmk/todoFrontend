const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura',
        done: true
    }, {
        _id: 2,
        description: 'Reunião equipe',
        done: false
    },{
        _id: 3,
        description: 'Praticar React',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.value } 
        default:
            return state
    }
}