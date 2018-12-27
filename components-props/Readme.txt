NOTE: Components can be split into reusable pieces and are like JavaScript functions. They accept inputs called "props" and return React elements that describe what's going to appear on the screen

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

NOTE:The function above is a valid React Component because it accepts a single "props" object argument with data and returns a React Element

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

NOTE: Elements can also represent user-defined components

const element = <Welcome name="Sara"  />;

NOTE: React passes JSX attributes to components when it sees element representing user-defined component, also called "props" - as a single project

function Welcome(props) {
  return <Hello, {props.name} <h1>;
}

const element = <Welcome name="Sara" />;
ReactDom.render(
  element,
  document.getElementById('root')
)

**FROM REACT DOCUMENTATION**
  1. We call ReactDOM.render() with the <Welcome name="Sara" /> element.
  2. React calls the Welcome component with {name: 'Sara'} as the props.
  3. Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
  4. React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

NOTE: Start component names with a capital letter. Components must return a single root element.They can be split into small components

NOTE: The below component describes a comment on a social media website, and can be extracted into reusable components:

 function Comment(props) {
   return (
     <div className="Comment">
       <div className="UserInfo">
         <img className="Avatar"
           src={props.author.avatarUrl}
           alt={props.author.name}
         />
         <div className="UserInfo-name">
           {props.author.name}
         </div>
       </div>
       <div className="Comment-text">
         {props.text}
       </div>
       <div className="Comment-date">
         {formatDate(props.date)}
       </div>
     </div>
   );
 }

NOTE: Whether a Component is a function or a class, IT MUST NEVER MODIFY ITS OWN PROPS:

function sum (a , b) {
  return a + b;
}

NOTE: "Pure" functions don't change their inputs and return the same result for the same inputs:

function withdraw(account, amount) {
  account.total -=amount;
}

NOTE: The function above changes its own input, and it's therefore "impure"
