import React, { Component} from 'react';

export default class DataEntryForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            address: '',
            city: '',
            province: '',
            postalCode: '',
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', this.state);
    };

    render() {
        return (
            <div>
                <h2>Data Entry Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        fullName:
                        <input
                            type="text"
                            name="fullName"
                            value={this.state.fullName}
                            onChange={this.handleChange}
                            placeholder='Enter Full Name'
                        />
                    </label>
                    <br />
                    <label>
                        address:
                        <input
                            type="text"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChange}
                            placeholder='Enter Address'
                        />
                    </label>
                    <br />
                    <label>
                        city:
                        <input
                            type="text"
                            name="city"
                            value={this.state.city}
                            onChange={this.handleChange}
                            placeholder='Enter City'
                        />
                    </label>
                    <br />
                    <label>
                        province:
                        <input
                            type="text"
                            name="province"
                            value={this.state.province}
                            onChange={this.handleChange}
                            placeholder='Enter Province'
                        />
                    </label>
                    <br/>
                    <label>
                        postalCode:
                        <input
                            type="text"
                            name="postalCode"
                            value={this.state.postalCode}
                            onChange={this.handleChange}
                            placeholder='Enter Postal Code'
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>

                {this.state.fullName && (
                    <div>
                        <h3>Submitted Information</h3>
                        <p>Full Name: {this.state.fullName}</p>
                        <p>Address: {this.state.address}</p>
                        <p>City: {this.state.city}</p>
                        <p>Province: {this.state.province}</p>
                        <p>Postal Code: {this.state.postalCode}</p>
                    </div>
                )}
            </div>
        )
    }
}