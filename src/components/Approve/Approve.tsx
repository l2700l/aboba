import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { ETH } from '../../api/connect';
import { updateBalance, updateUser } from '../../redux/store';

const Approve = () => {
    const [addressTo, setAddressTo] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState<string>();
    const dispatch = useDispatch()
    
    const onClick = async () => {
      try {
        await ETH.approve(addressTo, +amount)
        const addressq = await ETH.connect();
        const role = await ETH.getRole();
        const balance = await ETH.getBalance();
        dispatch(updateUser({data: {addressq, role}}))
        dispatch(updateBalance({data: balance}))
      } catch (e) {
        // @ts-ignore
        setError(e.data.message)
      }
    }
    return (
        <div>
            {error && <p>{error}</p>}
            <div>
            <Form.Label>
                Адрес кому: <br/>
            <Form.Control value={addressTo} onChange={e => setAddressTo(e.target.value)}/>
            </Form.Label>
            </div>
            <div>
            <Form.Label>
                Количество: <br/>
            <Form.Control value={amount} onChange={e => setAmount(e.target.value)}/>
            </Form.Label>
            </div>
            <br/>
            <Button onClick={onClick}>Разрешить</Button>
        </div>
    )
}

export default Approve;