import React, {useEffect} from 'react';
import Login from '../component/Login';
import Container from 'react-bootstrap/Container';
import 'reactjs-popup/dist/index.css';
import Transactions from '../component/Transactions';
import { useSelector } from 'react-redux';
import { login } from '../action/AppActions';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import { bindActionCreators } from 'redux';

const HomeScreen = (props) => {
    const logged = useSelector((state) => state.app.logged);
    const { email, token } = props;

    const [cookies, setCookie] = useCookies();
    
    useEffect(() => {
        const { login } = props;
        if (cookies.token && cookies.email) {
            login(cookies.email, cookies.token);
        }
    }, []);

    if (logged && !cookies.token && !cookies.email) {
        setCookie('email', email, { path: '/' });
        setCookie('token', token, { path: '/' });
    }

    return (
        <Container className="home-screen">
            {logged ? <Transactions /> : <Login />}
        </Container>
    );
}

const mapStateToProps = (state) => {
    const {
        app: { email, token },
    } = state;

    return { email, token };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login,
    }, dispatch);
};



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
