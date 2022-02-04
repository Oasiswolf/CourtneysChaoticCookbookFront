import React from "react";

// import BackGround from "../images/background_Test.png";
class SingleRecipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://courtneys-chaotic-cookbook-api.herokuapp.com/recipe/random")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          item: json,
          DataisLoaded: true,
        });
      });
  }
  mappingIngrediant() {
    return (
      <div>
        {this.state.item.ingredients.map((ingrediant) => {
          console.log(this.state.item);
          return <ol key={ingrediant}>{ingrediant.text}</ol>;
        })}
      </div>
    );
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div
        className="single-recipe-posting-wrapper"
        // style={{
        //   backgroundImage: `url(${BackGround})`,
        // }}
      >
        <ol key={this.state.item.id}>
          <div className="random">
            Name:{this.state.item.name}
            <br />
            Ingredients: {this.mappingIngrediant()}
            <br />
            Instructions:{this.state.item.instructions}
            <br />
            Servings:{this.state.item.servings}
            <br />
            Time: Prep:{this.state.item.time.prep}
            <br />
            Cook:{this.state.item.time.cook}
            <br />
            Active:{this.state.item.time.active}
            <br />
            Inactive:{this.state.item.time.inactive}
            <br />
            Ready:{this.state.item.time.ready}
            <br />
            Total:{this.state.item.time.total}
          </div>
        </ol>
      </div>
    );
  }
}

export default SingleRecipe;
