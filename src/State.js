import React from 'react'

export default class State extends React.Component {
    constructor() {
        super()
        this.state = { name: 'Soumya', Email: 'Abc@gmail', count: 0 }
        this.state={show:true}
    }
    UpdateState() {
        this.setState({
            name: 'Ranjan', Email: 'ranjan@cmail', count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.state.name} this From State and mail id is {this.state.Email} & Count is {this.state.count} </h1>
                <button onClick={() => { this.UpdateState() }}>Update Name</button>
{
                this.state.show ?
                <h2>Hide nd show</h2>:null
}
                <button onClick={()=>{this.setState({show:! this.state.show})}}>Tooggle Name</button>
    
            </div>
        )
    }
    }
