import React, {Component} from 'react'


class Home extends Component {
    render() {
        return (
            <div class="w3-display-container w3-animate-opacity w3-text-black">
                <div class="background"></div>
                <div className="w3-display-middle">
                    <h1 className="w3-jumbo w3-animate-top" id="smallTitle">Tanveer Bashir</h1>
                    <p class='fadeIn' align='center' >Software Engineer</p>
                    <hr className="w3-border-grey" style={{margin:'auto', width: '90%'}}/>
                </div>
            </div>
        )
    }
}
export default Home