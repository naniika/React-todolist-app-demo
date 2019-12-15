import React from "react";
import TodoListItems from "./components/TodoListItems";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
      return item;
    });
    this.setState({
      items: items
    });
  }
  render() {
    return (
      <div className="App">
        <nav class="navbar sticky-top navbar-expand navbar-dark bg-dark">
          <div class="navbar-brand text-capitalize">todo list - react app</div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">todo input</h3>
              <div className="card card-body my-3">
                <form onSubmit={this.addItem}>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book" />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control text-capitalize"
                      placeholder="enter text"
                      value={this.state.currentItem.text}
                      onChange={this.handleInput}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block btn-primary mt-3 text-capitalize"
                  >
                    add item
                  </button>
                </form>
              </div>
              <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list :</h3>
                <TodoListItems
                  items={this.state.items}
                  deleteItem={this.deleteItem}
                  setUpdate={this.setUpdate}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
