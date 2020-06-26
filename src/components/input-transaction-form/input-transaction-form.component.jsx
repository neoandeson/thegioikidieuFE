import React from 'react';
import { TextField, InputLabel, Select, MenuItem  } from '@material-ui/core';

export default class InputTransactionForm extends React.Component {
    constructor() {
        super();

        this.state = {
            txtName: '',
            hadError: {},
            touched: {},
            ages: [18, 19, 20]
        }
    }

    handleRequiredTextField = e => {
        debugger;
        let { hadError } = this.state;
        let isError = (e.target.value === "" || e.target.value === undefined) ? true : false;

        if (e.target.name) {
            hadError[e.target.name] = isError;
            this.setState({ hadError });
        }
    }

    render() {
        return (
            <div>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    name="Age"
                    style={{width: 120}}
                    onChange={this.handleRequiredTextField}
                    //helperText={this.state.hadError['Age'] ? "Please select one option" : ""}
                    error={this.state.hadError['Age']}
                    //value={age}
                    //onChange={handleChange}
                    onBlur={this.handleRequiredTextField}
                >
                    {this.state.ages.map((age) => (
                        <MenuItem key={age} value={age} >
                        {age}
                        </MenuItem>
                    ))}
                </Select>
                <br/>
                <TextField
                    name="Name"
                    label="Name"
                    onChange={this.handleRequiredTextField}
                    margin="normal"
                    helperText={this.state.hadError['Name'] ? "Please fill out this field" : ""}
                    error={this.state.hadError['Name']}
                    onBlur={this.handleRequiredTextField}
                />
                <br />
                <TextField
                    name="Address"
                    label="Address"
                    onChange={this.handleRequiredTextField}
                    margin="normal"
                    helperText={this.state.hadError['Address'] ? "Please fill out this field" : ""}
                    error={this.state.hadError['Address']}
                    onBlur={this.handleRequiredTextField}
                />
                <br/>
                <TextField
                    name="Address"
                    label="Address"
                    required={true}
                />
            </div>
        );
    }
}
