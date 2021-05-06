import React, { Component } from 'react';
// import './App.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';
class Login extends Component {
  constructor() {
    //location.reload();
    super();
    this.state = {
      email: '',
      password: ''
    }


    this.password = this.password.bind(this);

    this.email = this.email.bind(this);

    this.login = this.login.bind(this);

  }


  email(event) {

    this.setState({ email: event.target.value })

  }
  password(event) {

    this.setState({ password: event.target.value })

  }

  login(event) {

    debugger;

    fetch('http://localhost:3001/api/user', {

      method: 'post',

      headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

      },
      body: JSON.stringify({

        email: this.state.email,

        password: this.state.password
      })

    }).then((Response) => Response.json())

      .then((result) => {
console.log(result.response);
        
        if (result.status === 200 && result.response.length > 0)
          //redirect to Dashboard
          alert("Login is successful...")
          
          else
            alert('Invalid User Name or Password');
        // this.props.history.push("/Dashboard");

      })

  }


  render() {
    

    return (

      <div className="app flex-row align-items-center">
        <Container>

          <Row className="justify-content-center">

            <Col md="9" lg="7" xl="6">

              <CardGroup>
                <Card className="p-2">
                    

                  <CardBody>
                  <h1 className="text-center">Login Page</h1>

                    <Form>

                      <div class="row" className="mb-2 pageheading">

                      </div>
                      <InputGroup className="mb-3">
                        <Input type="text" onChange={this.email} placeholder="Enter Email" />
                      </InputGroup>

                      <InputGroup className="mb-4">


                        <Input type="password" onChange={this.password} placeholder="Enter Password" />
                      </InputGroup>
                      <input type="submit" name="submit" onClick={this.login} color="success" />
                      {/* <Button onClick={this.login} color="success" block>Login</Button> */}

                    </Form>

                  </CardBody>

                </Card>
              </CardGroup>
            </Col>

          </Row>

        </Container>

      </div>

    );

  }

}


export default Login;