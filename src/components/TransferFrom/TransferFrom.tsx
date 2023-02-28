import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TransferFrom = () => {
    const [addressFrom, setAddressFrom] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState<string>();

    const onClick = async () => {

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