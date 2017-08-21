import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';

class App extends React.Component {
    render(){
        return <div>
            <Counter/>
        </div>
    }
}
const Connector = connect(null, null)(App);

export default Connector;
