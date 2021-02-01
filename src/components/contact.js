import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class contact extends Component {
    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    render() {
        return (  
            <div class="fullPage" >
                <div class="w3-container w3-content w3-padding-64" >
                <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16" d="about">Contact</h3>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button type="submit">Send</Button>
                </Form>
            </div>
            </div>
        )
    }
}

export default contact
