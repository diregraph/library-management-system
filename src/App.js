import { Header, Main, Footer } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/Navbar";

function App() {
    return (
        <>
            <Header>
                <NavBar>
                    <NavItem>
                        <NavLink href="default.asp">Catalog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="news.asp">Dashboard</NavLink>
                    </NavItem>
                </NavBar>
            </Header>
            <Main>This is the main content</Main>
            <Footer>This is the footer</Footer>
        </>
    );
}

export default App;
