import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ETH } from '../../api/connect';
import { updateBalance, updateUser } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Transfer = () => {
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState<string>();
    const dispatch = useDispatch()
    const onClick = async () => {
      try {
        await ETH.transfer(address, +amount)
        const balance = await ETH.getBalance();
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
                Адрес: <br/>
            <Form.Control value={address} onChange={e => setAddress(e.target.value)}/>
            </Form.Label>
            </div>
            <div>
            <Form.Label>
                Количество: <br/>
            <Form.Control value={amount} onChange={e => setAmount(e.target.value)}/>
            </Form.Label>
            </div>
            <br/>
            <Button onClick={onClick}>Передать</Button>
        </div>
    )
}

export default Transfer;