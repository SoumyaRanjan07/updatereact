import React, { Component } from 'react';
import ProtoTypes from 'prop-types'
class Typechecking extends Component {
    render() {
        return (
            <div>
                <h1>Type checking with Prototypes</h1>
                <h2>{this.props.age}</h2>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}
Typechecking.protoTypes={
    age:ProtoTypes.number,
    name:ProtoTypes.number
}
export default Typechecking;

