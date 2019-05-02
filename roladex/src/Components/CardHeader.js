import React, { Component } from 'react'


class CardHeader extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        let actualIndex = this.props.index +1
        let actualMax = this.props.indexLength
        let fullName = `${this.props.personName.first} ${this.props.personName.last}`
        return(
            <div className="cardHeader">
              <h1 className="personName">{fullName}</h1>
              <div ><h2>{actualIndex}/{actualMax}</h2></div>
            </div>
         
        )
    }
}

export default CardHeader