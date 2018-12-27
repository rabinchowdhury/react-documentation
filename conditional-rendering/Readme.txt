NOTE: React works the same way conditions work in JavaScript. JavaScript operators like "if" or the conditional operator to create elements representing the current state, and let react Update the UI to match them

NOTE: Consider these two components:

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function Guest Greeting(props) {
  return <h1>Please sign up.</h1>;
}

NOTE: A "Greeting" component displays either of these components depending on whether a user is logged in:

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <userGreeting />;
  }
    return <GuestGreeting />;
  }
}

ReactDom.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);

NOTE: Use variables to store elements and this can help conditionally render a part of the component while the rest of the output doesn't change:

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

NOTE: In the example below, a stateful component called LoginControl is called:

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

NOTE: In the example above, it will render either <LoginButton /> or <LogoutButton /> depending on its current state, and it will also render a <Greeting /> from the previous example

NOTE: Inline conditions in JSX is a short syntax

NOTE: Embed any expressions in JSX by wrapping them in curly braces and this includes the logical && operator:

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);

NOTE: Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false as shown below

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
It can also be used for larger expressions although it is less obvious what's going on:

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}

NOTE: Prevent component from rendering by returning "null" instead of its null rendering

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

NOTE: In the example above, the <WarningBanner /> is rendered depending on the value of the prop called warn (If the value of the prop is false, then the component does not render)

NOTE: Returning null from a component's render method does not affect the firing of the component's lifecycle methods
