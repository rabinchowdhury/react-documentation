NOTE: Handling events with React elements is similar to handling events on DOM elements. React events are named using camelCase, rather than lowercase, and JSX passes a function as the event handler, rather than a string

NOTE: For example, the HTML:

<button onClick="activateLasers()">
  Activate Lasers
</button>

NOTE: is slightly different in React:

<button onClick={activateLasers}>
  Activate Lasers
</button>

NOTE: Another difference is that you can't return "false" to prevent default behavior in React:

<a href="#" onClick="console.log('The Link was clicked.'); return false">
  click Me
</a>

NOTE: in React:

function ActionLink() {
  function handleClick(e) {
    e.peventDefault();
    console.log('the link was clicked');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
      </a>
  );
}

NOTE: In JavaScript, class methods are not bound by default. Forgetting to bind this.handleClick and passing it to onClick, this will be undefined when the function is called

NOTE: Generally, refering to a method without () after it, such as onClick={this.handleCLick}

NOTE: Other two methods, experiemental property initializer syntax to correctly bind callbacks:

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

NOTE: Arrow function in the callback:

class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
