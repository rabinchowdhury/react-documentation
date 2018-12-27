function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString*()}.</h2>
    </div>
  );
  ReactDom.render(
    element,
    document.getElementById('root')
  );
}
 setInterval(tick, 1000);

NOTE: State is private and fully controlled by the component

NOTE: Converting a functional component takes five steps:

  1. Create an ES6 class with the same name that extends React.Component.
  2. Add a single empty method to it called render().
  3. Move the body of the function into the render() method.
  4. Replace props with this.props in the render() body.
  5. Delete the remaining empty function declaration.

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

NOTE: When the clock is rendered to the DOM, we set up a timer, and this is called mounting
NOTE: When the DOM produced by the clock is removed, this is called unmounting
NOTE: Declare special methods on the component class to run some code when a component mounts and unmounts:

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }

NOTE: These methods are called "lifecycle hooks" (i.e. lifecycle methods)

NOTE: componentDidMount() hook runs after the component output has been rendered to the DOM:

componentDidMount() {
  this.timerID = setInterval(
  () => this.tick(),
  1000
  );
}

NOTE: this.props is set up by React itself

NOTE: this.state is special, add additional fields to the class manually that isn't used for the visual output. If you don't use something in render(), it shouldn't be in state

NOTE: Destroy the timer in the componentWillUnmount() lifecycle hook:

componentWillUnMount() {
  clearInterval(this.timerID);
}

NOTE: Implement the tick() method that runs every second, and it will use this.setState() to schedule updates to the component local state:

class Clock extends React.Component {
  constructor (props)
    super(props);
    this.state = {date: new Date()};
}

componentDidMount() {
  this.timerID = setInterval(
  () => this.tick(),
  1000
  );
}

componentWillUnmount() {
clearInterval(this.timerID);
}

tick() {
  this.setState({
    date: new Date()
  });
}

render() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h1>
    <div>
    );
  }
}

ReactDom.render(
  <Clock />
  document.getElementById('root')
);

NOTE: Don't modify state directly:

//  Wrong
this.state.comment = 'Hello';

// Correct
this.setState({comment: 'Hello'});

NOTE: The constructor is the only place to assign this.state

NOTE: React may batch multiple setState() calls into a single update for performance. Because this.props and this.state may be updated asynchronously, don't rely on their values for calculating the next state:

// Wrong
this.state({
  counter: this.state.counter + this.props.increment,
});

NOTE: Use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

//Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));

NOTE: An arrow function is used above, but it also works with regular functions

//Correct
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});

NOTE: React merges the object into the current state

constructor(props) {
  super(props);
  this.state = {
    post: [],
    comments: [],
  };
}

NOTE: Update them independently with separate setState() calls:

componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

fetchComments().then(response => {
  this.setState({
    comments: response.comments
    });
  });
}

NOTE: Neither parent or child knows if a certain component is stateful or stateless, or if they're a function or a class. State is often called local or "encapsulated". It isn't accessible to any component other than the one that owns and sets it

NOTE: A component may choose to pass its state down as props to its child components

<h2>It is {this.state.date.toLocaleTimeString()}.</h2>

NOTE: "top-down" or "unidirectional" data flow

                **WATERFALL**
----------------------------------------------
||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||COMPONENT TREE||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||\\\\\\\\\COMPONENT STATE\\\\\\\\\\\
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

| = PROPS

"If you imagine a component tree as a waterfall of props, each component's state is like an additional water source that joins it at an arbitrary point but also flows down."

NOTE: Whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. Use stateless component inside stateful component, vice versa
