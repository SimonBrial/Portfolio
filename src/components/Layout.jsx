import { Header } from './navbar/index';
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    )
}
export default Layout