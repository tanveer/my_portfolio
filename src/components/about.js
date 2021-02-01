import React, { Component } from 'react'
import LearningResources from './learning_resources'
import { Accordion, Card } from 'react-bootstrap'

var url = 'https://www.freecodecamp.org/'

class About extends Component {
    render() {
        return (
            <div class="fullPage" >
                <div class="w3-container w3-content w3-padding-64" >
                <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16" d="about">ABOUT ME</h3>
                    <p>
                    Hi, I'm Tanveer, a self-taught software engineer who started learning to code in 2011, writing my first line of code printing (Hello, World) 
                    in the console, the idea that I can make the computer do this with just a couple of lines of code spark my interest in computer programming.
                    I started learning the fundamentals of computer science that's when I came across one of the largest resource for anyone who wants to learn to code <a href={url} target="_blank">FreeCodeCamp</a> 
                    "as the name suggests it is absolutely free” the site takes you from very beginning to advance level of computer programming concepts and web development.
                    During this time, I was working closely with my mentor who provided me with valuable guidance and plenty of resources that helped me learn new concepts, 
                    I later decided to learn mobile app development primarily iOS App development which led me to dig deeper into Apple's ecosystem and learn more on how to make an iOS app using Swift. 
                    around this time, I found out that Stanford’s CS193P taught by Paul Hagerty. was offering an online course on iOS development. I decide to take that class to learn from a reputed university for free! 
                    "it's mind-blowing that one can get a world-class education at no cost from the comfort of their home." This was an obvious choice for me to learn iOS and Mobile app development. 
                    The joy of making something that others could use and benefit from it is very rewarding.
                    </p>
                    <hr />
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Resource I used in my journey
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <LearningResources />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    
                </div>
          </div>
          
        )
    }
}

export default About