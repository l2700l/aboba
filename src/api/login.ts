import { userType } from "../types/user"

const login = async (address: string, password: string) => {
    const response = await (await fetch(process.env.REACT_APP_API_URL+'/login', {
        method: 'POST',
        body: JSON.stringify({address, password})
    })).json()
    return response as userType
}
export default login