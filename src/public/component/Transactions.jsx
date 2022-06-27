import React, {useEffect} from 'react';
import ActionButtons from './ActionButtons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTransactions } from '../action/TransactionActions';


const Transactions = (props) => {
    const email = useSelector((state) => state.app.email);
    const transactions = useSelector((state) => state.transactionReducer.transactions);

    useEffect(() => {
        const { fetchTransactions } = props;
        fetchTransactions(email);
    }, []);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();
    const todayLocale  = today.toLocaleDateString("en-US", options); 

    const getDate = (date) => {
        const transactionDate = new Date(date);
        let transactionDateLocale = transactionDate.toLocaleDateString("en-US", options);

        if (todayLocale === transactionDateLocale){
            transactionDateLocale += " - Today";
        }

        return transactionDateLocale;
    };

    const getTime = (date) => {
        const optionsTime = { hour: 'numeric', minute: 'numeric' };
        const transactionDate = new Date(date);
        let transactionTime = transactionDate.toLocaleDateString("en-US", optionsTime).split(",")[1];

        return transactionTime;
    };

    return (
        <div className="transactions">
                <ActionButtons />

                <Container className="">
                    <div>
                        <Row>
                            <Col className="text-left">
                                <p className="copyright ml-2 is-selectable">{today.toLocaleDateString("en-US", options)} - Today</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} className="text-center">
                                <div className="mt-3">
                                    <span className="icon download-icon p-3">
                                        <i class="fa fa-download"></i>
                                    </span>
                                </div>
                            </Col>
                            <Col xs={6} className="text-left">
                                <Container>
                                    <Row>
                                        <Col>
                                            <p className="copyright ml-2 is-selectable text-dark">Received</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="copyright ml-2 is-selectable text-light">Received at 01:22 am</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col xs={4} className="text-center">
                                <Container className="">
                                    <Row>
                                        <Col className="text-left">
                                            <p className="copyright ml-2 is-selectable text-green text-dark">+260 DOGE</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-left">
                                            <p className="copyright ml-2 is-selectable text-dark">+$20</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </div>

                    {transactions.map((item, index) =>
                        <div>
                            <Row>
                                <Col className="text-left">
                                    <p className="copyright ml-2 is-selectable">{getDate(item.date)}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={2} className="text-center">
                                    <div className="mt-3">
                                        <span className="icon download-icon p-3">
                                            <i class="fa fa-download"></i>
                                        </span>
                                    </div>
                                </Col>
                                <Col xs={6} className="text-left">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <p className="copyright ml-2 is-selectable text-dark">{item.type}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="copyright ml-2 is-selectable text-light">{item.type} a las {getTime(item.date)}</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col xs={4} className="text-center">
                                    <Container className="">
                                        <Row>
                                            <Col className="text-left">
                                                <p className="copyright ml-2 is-selectable text-green text-dark">+{item.amount*13} DOGE</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-left">
                                                <p className="copyright ml-2 is-selectable text-dark">+${item.amount}</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </div>
                    )}
                </Container>

            </div>          
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchTransactions,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(Transactions);
