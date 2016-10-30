'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor () {
        super();

        this.state = {
            txt:'state txt'
        };

        this.update = this.update.bind(this);
        this.updateColors = this.updateColors.bind(this);
    }

    static get propTypes () {
        return {
            txt: React.PropTypes.string,
            cat: React.PropTypes.number.isRequired //forces the user of the component to pass a prop
        };
    }

    static get defaultProps () {
        return {txt: 'Default txt'};
    }

    // -- Lifecycle Methods --
    //componentWillMount - when the component is ready to mount on the dom
    //   - does not have access to the dom. only in state and props

    //componentDidMount - when component is mounted on the dom
    //   - has access to the dom (duh)

    //componentWillUnmount - when component is about to get removed to the dom
    //   - clean up processes

    //componentWillReceiveProps(nextProps) - when component receives updated properties from the parent

    //shouldComponentUpdate(nextProps, nextState) - returns boolean
    //    - useful when you are controlling when the component will be rerendered

    // componentDidUpdate(prevProps, prevState) - called after component rerendered and received new props

    update (e) {
        this.setState({txt: e.target.value});
    }

    updateColors () {
        this.setState({
            red: this.refs.red.getInputValue(),
            green: this.refs.green.getInputValue(),
            blue: this.refs.blue.getInputValue(),
        });
    }

    render () {
        return (
            <div>
                <h5>{this.state.txt}</h5>
                <input type="text" onChange={this.update} />
                <hr/>
                <Slider ref="red" update={this.updateColors} />
                {this.state.red}
                <hr/>
                <Slider ref="green" update={this.updateColors} />
                {this.state.green}
                <hr/>
                <Slider ref="blue" update={this.updateColors} />
                {this.state.blue}
                <hr/>
            </div>
        )
    }
}

class Slider extends React.Component {
    getInputValue () {
        return this.refs.input.value;
    }

    render () {
        return (
            <input ref="input" type="range"
                min="0"
                max="255"
                onChange={this.props.update} />
        );
    }
}
// another way of defining proptypes
// App.propTypes = {}
// App.defaultProps = {}

// stateles function component
// const App = () => <div>Hello World</div>

// use this.props.children to access child elements pass by the parent

ReactDOM.render(<App cat={5} txt="Hello World"/>, document.getElementById('app'));

export default App;
