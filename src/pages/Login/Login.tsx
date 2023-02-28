import { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import login from "../../api/login";
import { updateUser } from "../../redux/store";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>();
    const dispatch = useDispatch()
    const auth = async () => {
        const user = await login(username, password)
        if (user.success) {
            dispatch(updateUser(user))
        }
        else {
            setError(user.error);
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <Form.Label>
                Логин: <br/>
            <Form.Control value={username} onChange={e => setUsername(e.target.value)}/>
            </Form.Label>
            <Form.Label>
                Пароль: <br/>
            <Form.Control value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Label>
            <br/>
            <Button onClick={auth}>Войти</Button>
        </div>
    )

}
export default Login