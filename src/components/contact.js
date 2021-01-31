import React, { Component } from 'react'

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
            <div class="w3-container">
                <div class="3-container title" id="contact">
                    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">CONTACT</h3>
                </div>
                <div class="w3-container w3-content w3-padding-64" >
                    <p class="w3-opacity w3-center"><i>Let's get in-touch</i></p>
                    <form >
                        <div class="w3-row w3-padding-32">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1" class="col-sm-2 control-label">Email address</label>
                                    <div class="col-sm-8">
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1" class="col-sm-2 control-label">Message</label>
                                    <div class="col-sm-8">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button class="btn btn-primary" type="submit">Send</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default contact
