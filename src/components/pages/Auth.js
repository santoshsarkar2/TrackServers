import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';
// export default class Auth extends Component {
class Auth extends Component {    
    constructor(){
        super();

        this.state={
            email: null,
            password: null,
            login: false,
            token: null,
        }

    }

    
     
    
    login() {
        
        // alert("login Called");
        console.warn("State: ", this.state)

        fetch('http://localhost:3001/api/user', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.token);
                localStorage.setItem("auth", JSON.stringify({
                    login: true,
                    token: resp.token

                }))
                this.setState({
                    login: true
                })
                console.warn("State: ", this.state)
                alert("Login is successful...")
                window.location.replace("/");


            })

        })


    }

    render() {
        var auth = JSON.parse(localStorage.getItem('auth'));
        return (
            <div className="app flex-row align-items-center">
                <Container>

                    <Row className="justify-content-center">

                        <Col md="9" lg="7" xl="6">

                            <CardGroup>
                                <Card className="p-2">


                                    <CardBody>

                                        {auth ? <Redirect to="/" /> : null}

                                        <h1>Login Form</h1>
                                        <div>
                                            Username<br />
                                            
                                            <InputGroup className="mb-3">
                                                <Input type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="Enter Email" />
                                            </InputGroup>
                                        </div>
                                        <div style={{ marginTop: 10 }}>
                                            Password<br />
                                            <InputGroup className="mb-4">
                                                <Input type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} placeholder="Enter Password" />
                                            </InputGroup>
                                        </div>
                                        
                                        <Button onClick={() => this.login()} color="success" block>Login</Button>
                                    </CardBody>

                                </Card>
                            </CardGroup>
                        </Col>

                    </Row>

                </Container>

            </div>
        )
    }
}
export default Auth;
