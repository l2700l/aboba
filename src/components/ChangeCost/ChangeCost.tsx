import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ETH } from '../../api/connect';
import { updateBalance } from '../../redux/store';
import { useDispatch } from 'react-redux';

const ChangeCost = () => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState<string>();
    const dispatch = useDispatch()
    const onClick = async () => {
      try {
        await ETH.changeCost(+(amount.replace(',', '.')))
        const balance = await ETH.getBalance();
        dispatch(updateBalance({data: balance}))
      } catch (e) {
        console.log(e)
        // @ts-ignore
        setError(e.data)
      }
    }
    return (
        <div>
            {error && <p>{error}</p>}
            <div>
            <Form.Label>
                Количество: <br/>
            <Form.Control value={amount} onChange={e => setAmount(e.target.value)}/>
            </Form.Label>
            </div>
            <br/>
            <Button onClick={onClick}>Установить</Button>
        </div>
    )
}

export default ChangeCost;