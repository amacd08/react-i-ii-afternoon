import React, { Component } from 'react'

class Footer extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    handleAddIndex = () => {
        this.props.addIndex()
    }

    handleMinusIndex = () => {
        this.props.minusIndex()
    }


    render() {
        return(
            <footer>
                <h3 className="button" onClick={this.handleMinusIndex}>Previous</h3>
                <h3 className="button" onClick={this.handleAddIndex}>Next</h3>
           </footer>
        )
    }
}

export default Footer