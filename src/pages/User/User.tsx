import { useState } from "react"
import { Form } from "react-bootstrap"
import Approve from "../../components/Approve/Approve"
import Buy from "../../components/Buy/Buy"
import Transfer from "../../components/Transfer/Transfer"
import TransferFrom from "../../components/TransferFrom/TransferFrom"
import UserWhitelist from "../../components/UserWhitelist/UserWhitelist"

const User = () => {
    const [selected, setSelected] = useState('unselected')
    return (
        <div>
            <div>
                <a href='#'>Вернуться</a>
            </div>
            <br/>
            <Form.Select onChange={e =>setSelected(e.target.value)}>
                <option value={'unselected'}>Выбрать</option>
                <option value={'transfer'}>Передача токенов</option>
                <option value={'approve'}>Выдача права распоряжения токенами</option>
                <option value={'transfer-from'}>Получить с чужого адреса</option>
                <option value={'whitelist'}>Подать заявку в whitelist</option>
                <option value={'buy'}>Покупка</option>

            </Form.Select>
            <br/>
            <br/>
            {selected === 'transfer' && <Transfer/>}
            {selected === 'approve' && <Approve/>}
            {selected === 'transfer-from' && <TransferFrom/>}
            {selected === 'whitelist' && <UserWhitelist/>}
            {selected === 'buy' && <Buy/>}
        </div>
    )
}
export default User