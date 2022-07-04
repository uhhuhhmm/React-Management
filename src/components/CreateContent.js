import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    // console.log("CreateContent render");
    return (
      <article>
        <h2>회원가입</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            // alert("Submit!!");
            this.props.onSubmit(
              e.target.title.value,
              e.target.user_id.value,
              e.target.name.value,
              e.target.gender.value,
              e.target.birth.value,
              e.target.age.value,
              e.target.address.value,
              e.target.phone.value,
              e.target.country.value
              // e.target.desc.value
            );
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="Title"></input>
          </p>
          <p>
            <input type="text" name="user_id" placeholder="ID"></input>
          </p>
          <p>
            <input type="text" name="name" placeholder="Name"></input>
          </p>
          <p>
            <input type="radio" name="gender" placeholder="Gender" value="male"></input>
            <label value="male">Male</label>
            <input type="radio" name="gender" placeholder="Gender" value="female"></input>
            <label value="female">Female</label>
          </p>
          <p>
            <input type="date" name="birth" placeholder="Birth"></input>
          </p>
          <p>
            <input type="number" name="age" placeholder="Age"></input>
          </p>
          <p>
            <input type="text" name="address" placeholder="Address"></input>
          </p>
          <p>
            <input type="tel" name="phone" placeholder="010-0000-0000" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"></input>
          </p>
          <p>
            <input type="text" name="country" placeholder="Country"></input>
          </p>
          {/* <p>
            <textarea name="desc" placeholder="Etc."></textarea>
          </p> */}
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
