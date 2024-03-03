import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { name: "name", location: "loc" },
    };
    console.log("child Constructor " + this.props.name);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/thafzi");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo:json
    })

    console.log("child Component Did mount " + this.props.name);
  }
  render() {
    console.log("child render " + this.props.name);
    const { count } = this.state;
    return (
      <div>
        <h1>This is Class Component</h1>
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Name: {this.state.userInfo.login}</h2>
        <h2>location:{this.state.userInfo.location}</h2>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}
export default ProfileClass;
