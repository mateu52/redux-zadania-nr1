//import actions from './actions'

const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10', { method: 'GET' })
    const json = await response.json()

    return json
}

export const getAllUsers = () => 
    async (dispatch) => {
        const users = await fetchUsers()
        console.log(users)
    }
