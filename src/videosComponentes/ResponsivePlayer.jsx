import React, { Component, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./css/responsive-player.css";
/*class ResponsivePlayer extends Component {
  constructor(props) {
    super(props);
    let key = this.props.match.params.id;
    let currentData = this.props.data.filter((data) => data.id === key);
    this.state = {
      oldKey: key,
      data: currentData,
    };
  }
  // async componentWillReceiveProps(nextprops) {
  //   let key = this.props.match.params.id;
  //   let currentData = this.props.data.filter((data) => data.id === key);

  //   if (key != this.state.oldKey) {
  //     await this.setState({
  //       data: currentData,
  //     });

  //     console.log("this is when i set the state", this.state.data);
  //   }
  // }

  updateStates = () => {
    let path = this.props.location.pathname;
    console.log("my path", this.props.location.pathname);
    console.log(`/L/${this.state.oldKey}`);
    if (`/L/${this.state.oldKey}` != path) {
      let currentData = this.props.data.filter(
        (data) => `/L/${data.id}` === path
      );
      console.log("im in the if ", this.props.data);
      this.setState({
        data: [currentData],
      });
    }
  };
 
   useEffect(() => {

   })




  render() {
    // let key = this.props.match.params.id;
    // let currentData = this.props.data.filter((data) => data.id === key);

    console.log("data", this.state.data);
    return (
      <React.Fragment>
        {this.state.data.map((item) => (
          <div className="player-container">
            <h2>{item.title}</h2>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={item.url}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}*/

const ResponsivePlayer = (props) => {
  const [data, setData] = useState([props.firstData]);
  const [oldKey, saveOldKey] = useState(props.firstData.id);

  useEffect(() => {
    let path = props.location.pathname;

    if (path != oldKey) {
      let currentData = props.data.filter((data) => `/L/${data.id}` === path);
      setData(currentData);
    }
    saveOldKey(path);
  });

  return (
    <React.Fragment>
      <div className="player-container">
        <h2 className="player-title">{data[0].title}</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={data[0].url}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResponsivePlayer;
