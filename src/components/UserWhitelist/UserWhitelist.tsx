import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ETH } from '../../api/connect';
import { updateBalance } from '../../redux/store';
import { useDispatch } from 'react-redux';

const UserWhitelist = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState<string>();
  const dispatch = useDispatch()
    const onClick = async () => {
      try {
        await ETH.sendRequest(name)
        const balance = await ETH.getBalance();
        dispatch(updateBalance({data: balance}))
      } catch (e) {
        console.log(e)
        // @ts-ignore
        setError(e.data.message)
      }
    }
    return (
        <>
            {error && <p>{error}</p>}
            <div>
            <Form.Label>
                Название: <br/>
            <Form.Control value={name} onChange={e => setName(e.target.value)}/>
            </Form.Label>
            </div>
            <br/>
            <Button onClick={onClick}>Подать</Button>
        </>
    )
}
export default UserWhitelist