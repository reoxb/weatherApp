import React, {Component} from 'react';
import Form from './components/Form'
import Card from './components/Card'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'Japan'
        };
        this.post = this.post.bind(this)
    }

    post(val){
        this.setState(val)
    }

    render() {
        return (
            <div className="container">
                <Form handleSubmit={this.post}/>
                {JSON.stringify(this.state)}
                <Card query={this.state.query} />
            </div>
        );
    }
}

export default App;
