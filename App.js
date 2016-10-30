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

    update (e) {
        this.setState({txt: e.target.value});
    }

    updateColors () {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).value,
            green: ReactDOM.findDOMNode(this.refs.green).value,
            blue: ReactDOM.findDOMNode(this.refs.blue).value,
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
    render () {
        return (
            <input type="range"
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

ReactDOM.render(<App cat={5} txt="Hello World"/>, document.getElementById('app'));

export default App;
