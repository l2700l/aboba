import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ETH } from '../../api/connect';
import { updateBalance, updateUser } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Buy = () => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState<string>();
    const dispatch = useDispatch()
    
    const onClick = async () => {
      try {
        await ETH.buy(+amount)
        const balance = await ETH.getBalance();
        dispatch(updateBalance({data: balance}))
      } catch (e) {
        console.log(e)
        // @ts-ignore
        setError(e.data.message)
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
            <Button onClick={onClick}>Купить</Button>
        </div>
    )
}
export default Buy