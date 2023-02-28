import { useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { OWNER, PRIVATE, PUBLIC, USER } from "../../routes"

const Cabinet = () => {
    const user = useSelector((state: RootStore) => state.user)
    const getLinks = () => {
        switch (user?.data?.role) {
            case 'owner':
                return <>
                        <a href={'#'+OWNER}>Панель владельца</a>
                        <a href={'#'+USER}>Панель пользователя</a>
                    </>
            case 'private':
                return <>
                        <a href={'#'+PRIVATE}>Панель private провайдера</a>
                        <a href={'#'+USER}>Панель пользователя</a>
                    </>
            case 'public':
                return <>
                        <a href={'#'+PUBLIC}>Панель public провайдера</a>
                        <a href={'#'+USER}>Панель пользователя</a>
                    </>
            case 'user':
                return <>
                        <a href={'#'+USER}>Панель пользователя</a>
                    </>
        }
    }
    return (
        <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around'}}>
            {getLinks()}
        </div>
    )
}
export default Cabinet