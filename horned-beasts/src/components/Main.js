import React from 'react'
import HornedBeast from './HornedBeast'
import data from '../assets/data.json'

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data }
    }

    render() {
        return (
            <div id="mainDiv">
                {this.state.data.map(items => {
                    return (
                        <HornedBeast
                            title={items.title}
                            description={items.description}
                            alt={items.title}
                            imageUrl={items.image_url}

                        />

                    )

                }
                )
                }

            </div>
        )
    }
}

export default Main