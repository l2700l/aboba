import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ChangeCost = () => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState<string>();

    const onClick = async () => {

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