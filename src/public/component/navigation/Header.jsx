import React, { FC } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { logout } from '../../action/AppActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Header = (props) => {
    const logged = useSelector((state) => state.app.logged);
    
    const [cookies, setCookie, removeCookie] = useCookies();

    const close = (event) => {
        event.preventDefault()
        const { logout } = props;
        logout();
        removeCookie("token");
        removeCookie("email");
    }

    return (
        <Navbar bg="dark" expand="md" fixed="top">
            <Container>
                <Navbar.Brand className="is-capitalized" href="#home">Dogecoin wallet</Navbar.Brand>
                <Nav className="ml-auto">
                    {logged ? <Nav.Link onClick={close} href="/">Logout</Nav.Link> : <Nav.Link href="/">Login</Nav.Link>}
                </Nav>
            </Container>
        </Navbar>
    );
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logout,
    }, dispatch);
};


export default connect(null, mapDispatchToProps)(Header);