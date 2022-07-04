import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log("UpdateContent render");
    return (
      <article>
        <h2>개인정보 업데이트</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            // alert("Submit!!");
            // this.props.onSubmit(e.target.title.value, e.target.desc.value);
            this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
          }.bind(this)}
        >
          {/* 중요한 정보를 넘겨서 사용할 수 있다 */}
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={
                //   function (e) {
                //   console.log(e.target.value);
                //   this.setState({ title: e.target.value });
                // }.bind(this)
                this.inputFormHandler
              }
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="Description"
              value={this.state.desc}
              onChange={
                //   function (e) {
                //   console.log(e.target.value);
                //   this.setState({ desc: e.target.value });
                // }.bind(this)
                this.inputFormHandler
              }
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
