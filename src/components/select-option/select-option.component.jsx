import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import '../form-input/form-input.styles.scss'
 

//Select dropdown to choose specialization and return its value
class SelectSpecialization extends React.Component {
  constructor() {
    super();

    this.state = {
      specialization: "",
    };
  }

  //when the user selects an specialization, it sets the state to its value and return a call back to the parent of this component
  handleChange = (SelectedOption) => {
    this.setState({ Specialization: SelectedOption.target.value });
    this.props.callBack(SelectedOption.target.value); //returns value to the parent component
  };

  

  render() {
      const {specialization} = this.state;

    //reusing style from form-input taking out the property border "style={{border: "none"}}" to make it similar to the rest of the form
    return (
      <div className="group">
        <FormControl className="form-input" style={{border: "none"}} required>
          <InputLabel className="form-input-label" style={{fontFamily:"Open Sans Condensed", fontWeight:"lighter"}} id="specialization"> Specialization </InputLabel>
          <Select
            defaultValue= "" //Avoids uncontrolled error
            className="select-specialization"
            id="select-specialization"
            value={specialization.value}
            onChange={this.handleChange}

          >
            <MenuItem value="" style={{fontFamily:"Open Sans Condensed", fontWeight:"lighter"}}>
              <em>None</em>
            </MenuItem>
            <MenuItem value="employment" style={{fontFamily:"Open Sans Condensed", fontWeight:"lighter"}}>Employment Law</MenuItem>
            <MenuItem value="family" style={{fontFamily:"Open Sans Condensed", fontWeight:"lighter"}}>Family Law</MenuItem>
            <MenuItem value="immigration" style={{fontFamily:"Open Sans Condensed", fontWeight:"lighter"}}>Immigration Law</MenuItem>
            <MenuItem value="property" style={{fontFamily:"Open Sans Condensed", fontWeight:"lighter"}}>Property Law</MenuItem>
            <MenuItem value="traffic" style={{fontFamily:"Open Sans Condensed", fontWeight:"lighter"}}>Traffic Law</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default SelectSpecialization;
