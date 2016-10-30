'use strict';

import React from 'react';


let MixinSample = InnerComponent => class extends React.Component {
    constructor () {
        super();
        this.update = this.update.bind(this);
        this.state = {val: 0};
    }

    update () {
        this.setState({val: this.state.val + 1});
    }

    render () {
        return <InnerComponent update={this.update} {...this.state} {...this.props} />
    }
}
