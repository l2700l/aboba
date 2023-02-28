import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { RootStore, updateUser } from "../../redux/store"

const HeaderElement = ()=> {
    const user = useSelector((state: RootStore) => state.user);
    const balance = useSelector((state: RootStore) => state.balance);
    const phase = useSelector((state: RootStore) => state.phase);
    const time = useSelector((state: RootStore) => state.time);

    const dispatch = useDispatch()
    const unAuth = () => {
        dispatch(updateUser({}))
    }
    return (
        <div>
            <div className="Header__row">
                <p>Адрес: {user?.data?.address}</p>
                <p>CMON: {balance?.data?.CMON}</p>
                <p>Время жизни: {time?.data?.currentTime}</p>
                {time?.data?.currentTime > 9 && <p>Время public фазы: {time?.data?.currentTime - 10}</p>}
                <Button>Перемотать время</Button>
            </div>
            <div className="Header__row">
                <p>Роль: {user?.data?.role}</p>
                <p>ETH: {balance?.data?.ETH.slice(0, balance?.data?.ETH.length-18)+'.'+balance?.data?.ETH.slice(balance?.data?.ETH.length-18)}</p>
                {time?.data?.currentTime > 4 && <p>Время private фазы: {time?.data?.currentTime - 4}</p>}
                <Button onClick={unAuth}>Выйти</Button>
            </div>
        </div>
    )
}

export default HeaderElement;