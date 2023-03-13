import { useEffect, useState } from 'react'
import { Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { usersType } from "../../types/user"
import { ETH } from '../../api/connect';

const UsersInfo = () => {
    const [selected, setSelected] = useState('selected')
    const user = useSelector((state: RootStore) => state.user)
    const [users, setUsers] = useState<usersType>()
    useEffect(() => {
        const fetch = async () => {
            const users_data = await ETH.getUsers()
            setUsers(users_data)
        }
        fetch()
    }, [])
    const currentUser = users?.data?.find((user) => user.address === selected)
    return <div>
        <div>
            <Form.Select onChange={e =>setSelected(e.target.value)}>
                <option value={'unselected'}>Выбрать</option>
                {users?.data && users.data.map((user) => <option key={user.address} value={user.address}>{user.address}</option>)}
            </Form.Select>
            {currentUser && <div>
                    <p>Адрес: {currentUser.address}</p>
                    {(user?.data?.role === 'owner' || user?.data?.role === 'public') &&<p>Public: {currentUser.publicBalance}</p>}
                    {(user?.data?.role === 'owner' || user?.data?.role === 'private') &&<p>Private: {currentUser.privateBalance}</p>}
                </div>}
        </div>
    </div>
}

export default UsersInfo 