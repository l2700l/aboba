import { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateBalance, updateTime, updateUser } from '../../redux/store';
import { ETH } from '../../api/connect';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>();
    const dispatch = useDispatch()
    
    const auth = async () => {
      // @ts-ignore
      if (window.ethereum) {
        try {
          const address = await ETH.connect();
          const role = await ETH.getRole();
          const balance = await ETH.getBalance();
          const time = await ETH.getTime()
          dispatch(updateUser({data: {address, role}}))
          dispatch(updateBalance({data: balance}))
          dispatch(updateTime({data: time}))
        } catch (e) {
          // @ts-ignore
          setError(e.message)
        }
      } else {
        setError('Setup MetaMask!')
      }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <p>Чемпионат по компетенции "Разработка решений с использованием блокчейн технологий"</p>
            <Button onClick={auth}>Войти</Button>
        </div>
    )

}
export default Login