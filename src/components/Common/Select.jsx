import Select from "react-select";

import "components/Common/Select.scss";

const SelectInput = (props) => {
  //styling done through the style property of the library react-select (partial)
  //   const selectInputStyles = {
  //     container: (provided, state) => {
  //       return {
  //         ...provided,
  //         width: "100%",
  //       };
  //     },
  //     control: (provided, { isFocused }) => {
  //       return {
  //         ...provided,
  //         cursor: "pointer",
  //         border: isFocused ? "1px solid #649FD6" : "1px solid #939393",
  //         borderRadius: "7px",
  //         textAlign: "left",
  //         height: "42px",
  //       };
  //     },
  //     valueContainer: (provided, state) => {
  //       return {
  //         ...provided,
  //         paddingLeft: "10px",
  //         color: "#939393",
  //         fontFamily: "Lato",
  //         fontStyle: "normal",
  //         fontWeight: "400",
  //         fontSize: "16px",
  //         lineHeight: "19px",
  //       };
  //     },
  //     singleValue: (provided, state) => {
  //       return {
  //         ...provided,
  //         color: "#939393",
  //       };
  //     },
  //     menu: (provided, state) => {
  //       return {
  //         ...provided,
  //         background: "#FFFFFF",
  //         boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.08)",
  //         borderRadius: "7px",
  //       };
  //     },
  //     option: (provided, { data, isDisabled, isFocused, isSelected }) => {
  //       return {
  //         ...provided,
  //         position: "relative",
  //         color: "#555555",
  //         backgroundColor: isFocused ? "#ECCAE5" : undefined,
  //         borderRadius: isFocused ? "7px" : undefined,
  //         margin: "6px",
  //         width: "100",
  //         height: "42px",
  //         padding: "12px 24px",
  //         textAlign: "left",
  //         cursor: "pointer",
  //       };
  //     },
  //   };
  const handleOptionChange = (value) => {
    props.onSelectChange(value);
  };

  return (
    <div className="select-component">
      <label htmlFor={props.id}>
        {props.label} <span>*</span>
      </label>
      <Select
        className="react-select-container"
        options={props.options}
        // styles={selectInputStyles}
        id={props.id}
        defaultValue={props.defaultValue}
        classNamePrefix="react-select"
        onChange={handleOptionChange}
        aria-label={props.ariaLabel}
      />
    </div>
  );
};

export default SelectInput;
