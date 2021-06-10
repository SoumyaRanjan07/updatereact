import React from 'react'
import {Button} from 'react-bootstrap'
export default class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            user: '',
            pwd: '',
            nameerr: '',
            pwderr: ''

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
        this.setState({ nameerr: '', pwderr: '' })

        if (this.vaild()) {
            alert("Submit")
        }
    }

    render() {
        return (
            <div><h1 style={{ color: 'yellow' }}>
                React Form With Vaildation</h1>
                <input type='text' name='user' size='40' onChange={(e) => { this.setState({ user: e.target.value }) }} />
                <p style={{ color: "red", fontSize: "14px" }}>{this.state.nameerr}</p>
                <br></br>
                <input type='pwd' name='pwd' size='40' onChange={(e) => { this.setState({ pwd: e.target.value }) }} />
                <p style={{ color: "red", fontSize: "14px" }}>{this.state.pwderr}</p>
                <br></br>
                <Button  >Submit </Button>
            </div>
        )
    }
}