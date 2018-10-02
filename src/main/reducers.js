import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
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
    })
})

export default rootReducer