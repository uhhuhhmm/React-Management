// import logo from "./logo.svg";
import "./App.css";
// import function_t from "./components/function_t";
import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

// import Header from "./components/Header";
// import Article from "./components/Article";
// import Footer from "./components/Footer";
// import Logo from "./components/Logo";

// 수업
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "회원가입", sub: "Sign-In" },
      welcome: { title: "Welcome", desc: "Hello, React!!!" },
      contents: [
        {
          id: 1,
          title: "",
          user_id: "",
          name: "",
          gender: "",
          birth: "",
          age: "",
          address: "",
          phone: "",
          country: "",
        },
        // { id: 2, title: "CSS", desc: "CSS is for design" },
        // { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }

  // getReadContent start
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i++;
    }
  }
  // getReadContent end

  // getContent start
  getContent() {
    let _title,
      _desc = null,
      _article;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      let _content = this.getReadContent();
      _article = (
        <ReadContent
          user_id={_content.user_id}
          name={_content.name}
          gender={_content.gender}
          birth={_content.birth}
          age={_content.age}
          address={_content.address}
          phone={_content.phone}
          country={_content.country}
        />
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (user_id, _name, _gender, _birth, _age, _address, _phone, _country) {
            this.max_content_id = this.max_content_id + 1;

            let _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              user_id: user_id,
              name: _name,
              gender: _gender,
              birth: _birth,
              age: _age,
              address: _address,
              phone: _phone,
              country: _country,
            });
            console.log(user_id, _name, _gender, _birth, _age, _address, _phone, _country);

            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      let _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            // 배열로 만드는 함수
            let _contents = Array.from(this.state.contents);
            let i = 0;
            console.log(_id, _title, _desc);
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i++;
            }
            console.log(_contents);
            this.setState({
              contents: _contents,
              mode: "read",
            });
          }.bind(this)}
        />
      );
    }
    return _article;
  }
  //getContent end

  render() {
    // console.log("App render");
    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
            // alert("Check");
          }.bind(this)}
        />
        {/* 2가지 방법 <Subject></Subject>*/}
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
            // alert("Check");
          }.bind(this)}
        />
        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("Really Delete?")) {
                let _contents = Array.from(this.state.contents);
                let i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i++;
                }
                this.setState({
                  mode: "welcome",
                  contents: _contents,
                });
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
            // alert("Check");
          }.bind(this)}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
