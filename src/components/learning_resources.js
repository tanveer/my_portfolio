import React, { Component } from 'react'

const resources = [ 
    {
        url: 'https://www.freecodecamp.org/',
        info: ' - Web development and many other important concepts',
        tag: 'FreeCodeCamp'
    },
    {
        url: 'https://www.raywenderlich.com/',
        info: ' - great tutorial and plenty of free resource to learn from',
        tag: 'Ray Wenderlich'
    },
    {
        url: 'https://courses.edx.org/courses/course-v1:HarvardX+CS50M+Mobile/course/',
        info: '- Mobile app development, React, React-Native',
        tag: 'HarvardX CS50'
    },
    {
        url: 'https://www.udacity.com/course/ios-developer-nanodegree--nd003',
        info: ' - iOS Development Nano Degree (paid course)',
        tag: 'Udacity'
    },
    {
        url: 'https://www.hackingwithswift.com',
        info: ' - A gold standard if you want to learn best practices of Swift and iOS',
        tag: 'HackingWithSwift'
    },
    {
        url: 'https://docs.swift.org/swift-book/',
        info: ' - Swift is a fantastic way to write software',
        tag: 'Official Swift Guide'
    }
]


export class LearningResources extends Component {
    render() {
        return (
            <div>
                <ul>
                {
                    resources.map ( item => <li key={item}><a style={{color: 'blue'}} href={item.url} target="_blank">{item.tag}</a>{item.info}</li> )
                }
               </ul>
            </div>
        )
    }
}

export default LearningResources
