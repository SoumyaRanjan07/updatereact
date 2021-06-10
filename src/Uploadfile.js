
import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
class Uploadfile extends Component {
    constructor() {
        super()
        this.state = {
            img: ''
        }

    }

    fileup(ev) {
        this.setState({ img: ev.target.files[0] })
    }


    Uploadfile(e) {
        //const files = e.target.files
        const formdata = new FormData()
        // formdata.append('formdata',this.img,this.state.img.name)

        fetch("http://localhost:3000/api", {
            method: 'POST',
            body: formdata
        }).then((resp) => resp.json()).then((data) => {
            console.warn(data);
        });
    }
    
    render() {
        return (
            <div>
                <h1>Upload File</h1>
                <input type='file' onChange={this.fileup.bind(this)} name='mgup' />

                <Button onClick={this.Uploadfile.bind(this)}>Upload </Button>
            </div>
        )
    }
}

export default Uploadfile;