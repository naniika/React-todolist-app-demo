import React from "react";
import FlipMove from "react-flip-move";

function TodoListItems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return (
      <li
        className="list-group-item d-flex justify-content-between"
        key={item.key}
      >
        <div className="input-group">
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={e => {
              props.setUpdate(e.target.value, item.key);
            }}
            className="form-control text-capitalize"
          />
          <div
            className="input-group-append"
            onClick={() => props.deleteItem(item.key)}
          >
            <button type="button" class="btn btn-outline-danger">
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      </li>
    );
  });
  return (
    <FlipMove duration={200} easing="ease-in-out">
      {listItems}
    </FlipMove>
  );
}
export default TodoListItems;
