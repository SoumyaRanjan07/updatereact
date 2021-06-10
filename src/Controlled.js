import React from 'react';
import { Button } from 'react-bootstrap'
class Uncontrolled extends React.Component {
    constructor() {
        super();
        this.name = ''
        this.password = ''
    }
    Submit() {

        console.warn(this.state);

    }
    render() {
        return (
            <div className='App'>
                <h1>Controlled Component</h1>

                <input type='text' placeholder='@Name' onChange={(event) => { this.setState({ name: event.target.value }) }} />

                <br></br>  <br></br>
                <input type='password' placeholder='@password' onChange={(event) => { this.setState({ password: event.target.value }) }} />
                <br></br>  <br></br>
                <Button onClick={() => { this.Submit() }} >Submit</Button>


            </div>
        )
    }
}
export default Uncontrolled;