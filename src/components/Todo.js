import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteToDo, removeToDo } from "../actions";
import { useAuth } from "../contexts/AuthContext";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const { currentUser, logout } = useAuth();
  const list = useSelector((state) => state.todoReducers.list);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>
              {currentUser.email.split("@")[0]}: Add Your List Here ✌{" "}
            </figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add items.. "
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter")
                  dispatch(addTodo(inputData, setInputData("")));
              }}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData, setInputData("")))}
            ></i>
          </div>
          <div>
            <div className="showItems">
              {list.map((elem) => {
                return (
                  <div className="eachItem" key={elem.id}>
                    <h3>{elem.data}</h3>
                    <div className="todo-btn">
                      <i
                        className="far fa-trash-alt add-btn"
                        title="Delete item"
                        onClick={() => dispatch(deleteToDo(elem.id))}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="showItems">
              <button
                className="button effect04"
                data-sm-link-text="Remove All"
                onClick={() => dispatch(removeToDo())}
              >
                <span>🗑</span>
              </button>
              <button
                className="button effect04"
                data-sm-link-text="Logout"
                onClick={logout}
              >
                <span>🚪</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
