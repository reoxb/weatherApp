import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };
    }

    handleChange = event => {
        // name = task
        const { name, value } = event.target;

        this.setState({
            // name = task and value is value
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // valid state valid
        if(this.state.query !== '') {
            this.props.handleSubmit(this.state)
        }

        this.setState({ query: ''});
    }

    render(){
        const {query} = this.state

        return (
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="new-todo">
                        How is the weather over there?
                    </label>
                    <input 
                        type="text" 
                        name="query" 
                        id="new-todo"
                        value={query}
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        Find It!
                    </button>
                </form>
        )
    }
}

export default Form;