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

export function addToList(list, data) {
    let item = Object.assign({id: getNextTodoId()}, data)
    return list.concat([item])
}