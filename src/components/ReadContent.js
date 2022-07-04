import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    // console.log("Content render");
    return (
      <article>
        <h2>{this.props.title}</h2>
        <h2>ID : {this.props.user_id}</h2>
        <p>이름 : {this.props.name}</p>
        <p>성별 : {this.props.gender}</p>
        <p>생일 : {this.props.birth}</p>
        <p>주소 : {this.props.address}</p>
        <p>번호 : {this.props.phone}</p>
        <p>국가 : {this.props.country}</p>
        {/* <p>{this.props.desc}</p> */}
      </article>

      // e.target.title.value,
      // e.target.name.value,
      // e.target.gender.value,
      // e.target.birth.value,
      // e.target.age.value,
      // e.target.address.value,
      // e.target.phone.value,
      // e.target.country.value,
      // e.target.desc.value
    );
  }
}

export default ReadContent;
