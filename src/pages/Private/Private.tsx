import { useState } from "react"
import { Form } from "react-bootstrap"
import UsersInfo from "../../components/UsersInfo/UsersInfo"
import Whitelist from "../../components/Whitelist/Whitelist"

const Private = () => {
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
                <option value={'whitelist'}>Заявки в whitelist</option>
            </Form.Select>
            <br/>
            <br/>
            {selected === 'users' && <UsersInfo/>}
            {selected === 'whitelist' && <Whitelist/>}
        </div>
    )
}
export default Private