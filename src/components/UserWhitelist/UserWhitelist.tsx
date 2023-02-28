import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const UserWhitelist = () => {
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
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
            <Form.Control value={name} onChange={e => setName(e.target.value)}/>
            </Form.Label>
            </div>
            <br/>
            <Button onClick={onClick}>Подать</Button>
        </div>
    )
}
export default UserWhitelist