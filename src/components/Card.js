import React, {Component} from 'react';

import Fetch from './Fetch'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.setState({
                ...this.props
            });
        }
    }

    render(){
        const {query} = this.state

        return (
            <div>
                <h1>{query}</h1>
                <Fetch query={query}/>
            </div>
        )
    }
}

export default Card;