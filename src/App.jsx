import React from "react";
import List from "./Components/List/index";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]); //arrray means list is array
  const [value, setValue] = React.useState(""); //to store entire string when typing

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // [{value:shifna,status:false}]

  const handleclick = () => {
    // setData((preData) => [...preData, { valu, status: false }]);
    if (value !== "") {
      setData((prevData) => [...prevData, { value, status: false }]);
      setValue("");
    }
  };
  const ondelete = (e, index) => {
    e.stopPropagation();
    setData((preData) => preData.filter((_, i) => i !== index));
  };

  const handleChangeStatus = (i) => {
    let prevValues = [...data];
    prevValues[i].status = !prevValues[i].status;
    setData(prevValues);
  };

  const handleEdit = (e, i) => {
    e.stopPropagation();
    let person = prompt("edit", data[i].value);

    if (person) {
      let editedData = [...data];
      editedData[i].value = person;
      setData((prevState) => [...prevState, ...editedData]);
    }
  };
  return (
    <>
      <div>
        <input
          value={value}
          type="text"
          placeholder="enter text"
          onChange={handleChange}
          name="name"
        ></input>
        <button type="submit" onClick={handleclick}>
          Save
        </button>
        <h1>Tasks</h1>
        {data?.map((item, index) => (
          <List
            //calling funtion when passing props.for taing proper value AND ONLY CALL THE FUNCTION WEHN CLICK THE UTTON DELETE
            delete={ondelete}
            data={item}
            key={index}
            index={index}
            handleChangeStatus={handleChangeStatus}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
}

export default App;
