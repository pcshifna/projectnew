import React from "react";
import { useState } from "react";
import style from "./List.module.css";
const List = (props) => {
  return (
    <div className={style.main}>
      <div
        style={{ background: props.data.status && "red" }}
        className={style.list}
        // id={openLink ? "open" : "close"}
        onClick={() => props.handleChangeStatus(props.index)}
      >
        <h2>{props.data.value}</h2>
        <button onClick={(e) => props.delete(e, props.index)}>delete</button>
        <button onClick={(e) => props.handleEdit(e,props.index)}>Edit</button>
      </div>
    </div>
  );
};

export default List;
