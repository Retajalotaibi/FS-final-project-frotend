import React from "react";

class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="cards">
          <div className="card">
            <div className="card__image">
              <img src={this.props.card.image} width="80" height="120" />
            </div>
            <div className="card__desc">{this.props.card.alphabet}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
