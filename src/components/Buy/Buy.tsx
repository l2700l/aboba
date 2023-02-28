import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Buy = () => {
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
            <Button onClick={onClick}>Купить</Button>
        </div>
    )
}
export default Buy