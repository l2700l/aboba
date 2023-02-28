import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Transfer = () => {
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState<string>();

    const onClick = async () => {

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