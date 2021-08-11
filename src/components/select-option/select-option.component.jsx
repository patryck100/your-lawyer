import React from "react";

//Importing components already made from Material UI
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { FormControl } from "@material-ui/core";

//Reusing styled components
import {FormInputContainer, GroupContainer} from "../form-input/form-input.styles"


//Select dropdown to choose specialization and return its value
class SelectSpecialization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { label: "Employment Law", value: "employment" },
        { label: "Family Law", value: "family" },
        { label: "Immigration Law", value: "immigration" },
        { label: "Property Law", value: "property" },
        { label: "Traffic Law", value: "traffic" },
        { label: "Criminal Law", value: "criminal" },
      ],
      specialization: "",
    };
  }

  //when the user selects an specialization, it sets the state to its value and return a call back to the parent of this component
  handleChange = (SelectedOption) => {
    this.setState({ Specialization: SelectedOption.target.value });
    this.props.callBack(SelectedOption.target.value); //returns value to the parent component
  };

  render() {
    const { specialization, options } = this.state;

    
    return (
      <GroupContainer>
      {/* Using FormControl from material UI reusing styles from form-input component */}
        <FormInputContainer as={FormControl} required>
          <InputLabel
            className="form-input-label"
            style={{ fontFamily: "Open Sans Condensed", fontWeight: "lighter" }}
            id="specialization"
          >
            Specialization
          </InputLabel>
          <Select
            defaultValue="" //Avoids uncontrolled error
            className="select-specialization"
            id="select-specialization"
            value={specialization.value}
            onChange={this.handleChange}
          >
            <MenuItem
              value=""
              style={{ //in case of a null value
                fontFamily: "Open Sans Condensed",
                fontWeight: "lighter",
              }}
            >
              <em>None</em>
            </MenuItem>
            {options.map((option) => (//map through all the specialisation options
              <MenuItem
                key={option.value}
                value={option.value}
                style={{ 
                  fontFamily: "Open Sans Condensed",
                  fontWeight: "lighter",
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormInputContainer>
      </GroupContainer>
    );
  }
}//end of SelectSpecialization class

//by exporting, it allows this component to be called from another components
export default SelectSpecialization;
