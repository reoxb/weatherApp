import React, { Component } from 'react';

class App extends Component {
    state = {
        data: []
    };

    
    componentDidMount() {
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${this.props.query}&format=json&origin=*&limit=1`;

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    componentDidUpdate(prevProps) {
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${this.props.query}&format=json&origin=*&limit=1`;

        if (prevProps.query !== this.props.query) {
            fetch(url)
                .then(result => result.json())
                .then(result => {
                    this.setState({
                        data: result
                    })
                });
        }
    }

    render() {
        const { data } = this.state;

        let result = ''

        if(data.length){
            result = data.map((entry, index) => {
                console.log(entry);
                return <li key={index}>{entry}</li>;
            });
        }

        return <div className="container"><ul>{result || 'Nothing to show!'}</ul></div>;
    }
}

export default App;