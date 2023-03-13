import { Button, ButtonGroup } from "react-bootstrap"
import { whitelistRequests } from '../../types/whitelistRequests';
import { useEffect, useState } from 'react';
import { ETH } from '../../api/connect';
import { updateBalance } from '../../redux/store';
import { useDispatch } from 'react-redux';


const Whitelist = () => {
    const [requests, setRequests] = useState<whitelistRequests>()
    const dispatch = useDispatch()
    const fetch = async () => {
        const data = await ETH.getRequests();
        const balance = await ETH.getBalance();
        dispatch(updateBalance({data: balance}))
        setRequests(data)
    }
    useEffect(() => {
        fetch()
    }, [])
    
    const onClick = async (request: { address: string }, isAccept: boolean) => {
        await ETH.handleRequest(request.address, isAccept)
        await fetch()
    }
    return <div>
        {requests?.data.map((request) => <div>
            <p>Адрес: {request.address}</p>
            <p>Название: {request.name}</p>
            <ButtonGroup>
                <Button onClick={() => onClick(request, true)}>Принять</Button>
                <br/>
                <Button onClick={() => onClick(request, false)}>Отклонить</Button>
            </ButtonGroup>
        </div>)}
    </div>
}
export default Whitelist