import React from "react";
import alphabetData from "./alphabet.json";
import Card from "./card";
const cardItem = alphabetData.map((letter) => (
  <Card alphabet={letter.alphabet} />
));
class YourName extends React.Component {
  state = {
    name: "",
  };
  handleName = () => {
    const inputAlph = this.state.name;
    const result = alphabetData.filter((name) => name.alphabet == inputAlph);
  };
  render() {
    return (
      <>
        <div className="Yourname-div">
          <h1>لدينا هدية لك !</h1>
          <h1>اكتب اسمك باللغة العربية </h1>
          <input
            name="name"
            className="input-name"
            type="text"
            placeholder="اكتب اسمك..."
          ></input>
          <button>أرسال</button>
        </div>
        {cardItem}
      </>
    );
  }
}

export default YourName;
