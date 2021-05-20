import React from 'react'
export default class Lifcycle extends React.Component {
    componentWillUnmount() {
        alert('Deleted')
    }

    render() {
        return (
            <div>
                <ul>Event</ul>
                <li>Cycling</li>
                <li>Noon</li>
            </div>
        );
    }
}