import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ETH } from '../../api/connect';
import { useDispatch } from 'react-redux';
import { updateBalance, updateUser } from '../../redux/store';

const TransferFrom = () => {
    const [addressFrom, setAddressFrom] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState<string>();
    const dispatch = useDispatch()
    const onClick = async () => {
      try {
        await ETH.transferFrom(addressFrom, +amount)
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
                Адрес откуда: <br/>
            <Form.Control value={addressFrom} onChange={e => setAddressFrom(e.target.value)}/>
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

export default TransferFrom;