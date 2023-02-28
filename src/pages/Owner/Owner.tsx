import { useState } from "react"
import { Form } from "react-bootstrap"
import UsersInfo from "../../components/UsersInfo/UsersInfo"

const Owner = () => {
    const [selected, setSelected] = useState('unselected')
    return (
        <div>
            <div>
                <a href='#'>Вернуться</a>
            </div>
            <br/>
            <Form.Select onChange={e =>setSelected(e.target.value)}>
                <option value={'unselected'}>Выбрать</option>
                <option value={'users'}>Активы пользователей</option>
            </Form.Select>
            <br/>
            <br/>
            {selected === 'users' && <UsersInfo/>}
        </div>
    )
}
export default Owner