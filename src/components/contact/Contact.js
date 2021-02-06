import React, {Component} from "react"

class Contact extends Component{
    constructor(props){
        super(props)

        this.state={
            submited:false,
            formData:{
                firstName:"",
                lastName:""
            }
        }
    }
    handleChange = (event)=>{
        const formData = {...this.state.formData}

        formData[event.target.name]=event.target.value
        this.setState({formData})
    }
    resetForm = (event)=>{
        this.setState({
            submited: false,
            formData:{
             firstName:"",
             lastName:""   
            }
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();

        this.setState({
            submited:true
        })
    }
    render(){
        if(this.state.submited){
            return (
                <div className="Contact">
                    <p>Thank you {this.state.formData.firstName} for submiting the form</p>
                    <button onClick={this.resetForm}>Reset</button>
                </div>
            )
        }
        return(
            <div className="Contact">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.formData.firstName}
                            onChange={this.handleChange}
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.formData.lastName}
                            onChange={this.handleChange}
                            placeholder="Last Name"
                        />
                    </div>
                    <button>Submit Form</button>
                </form>
            </div>
        )
    }
}
export default Contact
