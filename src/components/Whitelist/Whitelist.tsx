import { Button, ButtonGroup } from "react-bootstrap"
import { whitelistRequests } from "../../types/whitelistRequests"

    const requests: whitelistRequests = {data: [{name: 'a', address: ''}], success: true, error: 'nil'}

const Whitelist = () => {
    const onClick = async (request: any, isAccept: boolean) => {

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