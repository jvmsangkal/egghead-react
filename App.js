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

    render () {
        return (
            <div>
                {this.state.txt}
                <input type="text" onChange={this.update} />
            </div>
        )
    }
}

// another way of defining proptypes
// App.propTypes = {}
// App.defaultProps = {}

// stateles function component
// const App = () => <div>Hello World</div>

ReactDOM.render(<App cat={5} txt="Hello World"/>, document.getElementById('app'));

export default App;
