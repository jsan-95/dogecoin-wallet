import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { login } from '../action/AppActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const Login = (props) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    };

    const sendData = (event) => {
        event.preventDefault()
        console.log('Sending data...' + data.email + ' ' + data.password);
        
        const { login } = props;
        login(data.email, data.password);
    }

    return (
        <div>
            <h1 className="text-center">Log in to see your transactions</h1>
            <Form onSubmit={sendData}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Email" onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" onChange={handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login,
    }, dispatch);
};


export default connect(null, mapDispatchToProps)(Login);
