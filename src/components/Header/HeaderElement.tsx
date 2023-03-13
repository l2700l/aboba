import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { RootStore, updateBalance, updateTime, updateUser } from '../../redux/store'
import { useEffect } from 'react';
import { ETH } from '../../api/connect';
let block = false
const HeaderElement = ()=> {
    const user = useSelector((state: RootStore) => state.user);
    const balance = useSelector((state: RootStore) => state.balance);
    const time = useSelector((state: RootStore) => state.time);
    const dispatch = useDispatch()
    const fetchData = async () => {
        const time = await ETH.getTime()
        const balance = await ETH.getBalance()
        dispatch(updateBalance({data: balance}))
        if (time.timeDiff === 5) {
            const phase = await ETH.getPhase();
            if (phase === 0 && !block) {
                block = true;
                await ETH.setPrivatePhase()
                setTimeout(() => block=false, 1000)
            }
        } else if (time.timeDiff === 10) {
            const phase = await ETH.getPhase();
            if (phase === 1 && !block) {
                block = true;
                await ETH.setPublicPhase()
                setTimeout(() => block=false, 1000)
    
            }
        }
        dispatch(updateTime({data: time}))
    }
    useEffect(() => {
        const interval = setInterval(() => {
            fetchData()
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    const unAuth = () => {
        const hash = window.location.hash
        if (hash !== '#') window.location.href = '#'
        dispatch(updateUser({}))
    }
    const timeTravel = async () => {
        await ETH.timeTravel()
        await fetchData()
    }
    return (
        <div>
            <div className="Header__row">
                <p>Адрес: {user?.data?.address}</p>
                <p>CMON: {balance?.data?.CMON}</p>
                <p>Время жизни: {time?.data?.timeDiff}</p>
                {time?.data?.timeDiff > 9 && <p>Время public фазы: {time?.data?.timeDiff - 10}</p>}
                <Button onClick={timeTravel}>Перемотать время</Button>
            </div>
            <div className="Header__row">
                <p>Роль: {user?.data?.role}</p>
                <p>ETH: {balance?.data?.ETH.slice(0, balance?.data?.ETH.length-18)+'.'+balance?.data?.ETH.slice(balance?.data?.ETH.length-18)}</p>
                <p>Фаза: {time?.data?.phase}</p>
                {time?.data?.timeDiff > 4 && <p>Время private фазы: {time?.data?.timeDiff - 5}</p>}
                <Button onClick={unAuth}>Выйти</Button>
            </div>
        </div>
    )
}

export default HeaderElement;