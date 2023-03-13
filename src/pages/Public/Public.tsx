import { useState } from "react"
import { Form } from "react-bootstrap"
import Transfer from "../../components/Transfer/Transfer"
import UsersInfo from "../../components/UsersInfo/UsersInfo"
import ChangeCost from '../../components/ChangeCost/ChangeCost';

const Public = () => {
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
                <option value={'transfer'}>Выдача вознаграждений</option>
                <option value={'change'}>Изменение стоимости</option>
            </Form.Select>
            <br/>
            <br/>
            {selected === 'users' && <UsersInfo/>}
            {selected === 'transfer' && <Transfer/>}
            {selected === 'change' && <ChangeCost/>}
        </div>
    )
}
export default Public