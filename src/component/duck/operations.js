import actions from './actions'

const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET' })
    const users = await response.json()

    return users
}

export const getAllUsers = () => 
    async (dispatch) => {
        const users = await fetchUsers()
        console.log(users)
        users.map(user => dispatch(actions.add(user.id)))
    }
// export const getAllUsers = () => {
//     return function(dispatch) {
//         dispatch(load());
//         fetch("https://jsonplaceholder.typicode.com/posts")
//     }
// }
