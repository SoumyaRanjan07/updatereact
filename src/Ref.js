import React from 'react'
import { Button, Modal } from 'react-bootstrap'
export default class Forms extends React.Component {
    constructor() {
        super()
        this.userRef = React.createRef();

        this.state = {
            user: '',
            pwd: '',
            nameerr: '',
            pwderr: '',
            show: 'false'
        }
    }

    vaild() {
        if (!this.state.user.includes('@') && this.state.pwd.length < 8) {
            this.setState({ nameerr: 'Invaild Name', pwderr: 'password is too short' })
        }

        else if (!this.state.user.includes('@')) {
            this.setState({ nameerr: 'Invaild Name' })
        }

        else if (this.state.pwd.length < 8) {
            this.setState({ pwderr: 'password is too short' })
        }

        else {
            return true
        }
    }
    submit() {
        // console.warn(this.userRef)
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <div><h1 style={{ color: 'yellow' }}>
                React Form With Ref</h1>
                <input ref={this.userRef} type='text' name='user' size='40' />
                <p style={{ color: "red", fontSize: "14px" }}>{this.state.nameerr}</p>
                <br></br>
                {/* <input type='pwd' name='pwd' size='40' onChange={(e) => { this.setState({ pwd: e.target.value }) }} />
                <p style={{ color: "red", fontSize: "14px" }}>{this.state.pwderr}</p>
                <br></br> */}
                <Button onClick={() => this.submit()}>Submit</Button>
                <Modal show={this.state.show} onHide={() => this.submit()}>
                    <Modal.Header closeButton> Modal Main</Modal.Header>
                    <Modal.Body>Hello this from Modal</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.submit()}>Close</Button>
                        <Button onClick={() => this.submit()}>Save</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}