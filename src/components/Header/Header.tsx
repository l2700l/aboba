import HeaderElement from "./HeaderElement"

const Header: React.FC<{children: JSX.Element | undefined}> = ({children}) => {
    return <>
        <HeaderElement/>
        {children}
    </>
}

export default Header;