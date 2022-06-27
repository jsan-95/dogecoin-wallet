import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import { useSelector, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postTransaction } from '../action/AppActions';


const ActionButtons = (props) => {
    const [data, setData] = useState({
        address: '',
        amount: ''
    });
    const email = useSelector((state) => state.app.email);

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        });
    };

    const sendData = (event) => {
        const dogeData = {
            address: data.address,
            amount: data.amount,
            email: email,
            type: "Send"
        };
        const { postTransaction } = props;
        postTransaction(dogeData);
    };

    return (
        <div className="text-center">
            <Popup trigger={<Button variant="primary me-3 pe-4 ps-4">
                    <span className="icon me-2">
                        <i class="fa fa-upload"></i>
                    </span>
                    Send
                </Button>
                } modal nested>
                <Form onSubmit={sendData} className="text-center">
                    <Form.Group className="mb-3 text-start" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" type="text" placeholder="Address" onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control name="amount" type="number" placeholder="Amount" onChange={handleInputChange}/>
                    </Form.Group>
                    <Button variant="primary text-center" type="submit">Send</Button>
                </Form>
            </Popup>
            <Button variant="primary pe-4 ps-4">
                <span className="icon me-2">
                    <i class="fa fa-download"></i>
                </span>
                Receive
            </Button>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        postTransaction
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(ActionButtons);