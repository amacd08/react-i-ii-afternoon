import React, { Component } from 'react'

class CardInformation2 extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        let movies = this.props.favMovies
        let entries = movies.map((elem,i) => <li key={i}>{elem}</li>)

        return(
            <div className="cardInformation2">
                <ul>
                  <h2>Favorite Movies:</h2>
                  {entries}
                </ul>
            </div>
        )
    }
}

export default CardInformation2