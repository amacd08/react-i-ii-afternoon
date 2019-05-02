import React, { Component } from 'react'


class CardInformation extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        let from = `${this.props.personInfo.city}, ${this.props.personInfo.country}`
        let job = `${this.props.personInfo.title}`
        let employer = `${this.props.personInfo.employer}`
        return (
            <div className="cardInformation">
                <ul>
                  <li><span className="differentText"><h2>{`From:`}</h2> <p>{from}</p></span></li>
                  <li><span className="differentText"><h2>{`Job Title:`}</h2> <p>{job}</p></span></li>
                  <li><span className="differentText"><h2>{`Employer:`}</h2> <p>{employer}</p></span></li>
                </ul>
            </div>
        )
    }
}

export default CardInformation