export function getAllTodo() {
    return [
        {
            id: 1,
            text: "Learn Javascript",
            completed: false
        },
        {
            id: 2,
            text: "Learn React",
            completed: false
        },
        {
            id: 3,
            text: "Build a React App",
            completed: false
        },
        {
            id: 4,
            text: "Here we go",
            completed: true
        }
    ]
}

let counter = 1

function getNextTodoId() {
    return getAllTodo().length + counter++
}

export function addTodo(list, data) {
    let item = Object.assign({id: getNextTodoId()}, data)
    return list.concat([item])
}

export function getItemById(itemId) {
    return getAllTodo.find(item => item.id ===itemId)
}

export function updateTodo(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId)
    
    let item = items[index]
    item.completed = !completed

    items[index] = item
    return items
}