import { useSelector } from "react-redux";
import Login from "../../pages/Login/Login";
import { RootStore } from "../../redux/store";

const AuthorizationService: React.FC<{children: JSX.Element | undefined}> = ({children}) => {
    const user = useSelector((state: RootStore) => state.user)
    // return <>{children}</>
    return <>{Object.keys(user).length > 0 ? children : <Login/>}</>
}

export default AuthorizationService;