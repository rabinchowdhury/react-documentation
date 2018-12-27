import React, { Component } from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         Title: "Title from props...",
         "description": "description from props..."
      }
   }

   render() {
      return (
         <div>
            <Title titleProp = {this.state.Title}/>
            <Description descriptionProp = {this.state.description}/>
         </div>
      );
   }
}

class Title extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.titleProp}</h1>
         </div>
      );
   }
}

class Description extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.descriptionProp}</h2>
         </div>
      );
   }
}

export default App;
