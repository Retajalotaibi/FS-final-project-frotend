import React from "react";
import alphabetData from "./alphabet.json";
import Card from "./card";

class YourName extends React.Component {
  state = {
    name: "",
  };
  // handleName = () => {
  //   const inputAlph = this.state.name;
  //   const result = alphabetData.array.filter(
  //     (name) => name.alphabet == inputAlph
  //   );
  //   const cardItem = result.map((letter) => (
  //     <Card alphabet={letter.alphabet} />
  //   ));
  // };

  render() {
    const result = alphabetData.filter(
      (letter) => letter.alphabet == this.state.name
    );

    const cards = result.map((card) => {
      console.log(card);
      return (
        <>
          <Card card={card} />
        </>
      );
    });

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
          <div>{cards}</div>
        </div>
      </>
    );
  }
}

export default YourName;
