class Provider extends Component {
    getChildContext () {
        return {store: this.props.store};
    }

    render () {
        return this.props.children;
    }
}

Provider.childContextTypes = {
    store: React.PropTypes.object;
}
// or just use the one provided by 'react-redux' different from 'redux'



// for components
const {store} = this.context;
AddTodo.contextTypes = {
    store: React.PropTypes.object;
}

// for functional components
(props, {store}) => {};
