// TODO

const App = () => (
  <div>
    <h2>Our Grosero List</h2>
    <GroceryList items={['cucumbers', 'kale', 'schrooms']}/>
    </div>
);

class GroceryList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  };
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return <div>
      <ul id="halp">
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.items[0]}</li>
        <li>{this.props.items[1]}</li>
        <li>{this.props.items[2]}</li>
      </ul>
    </div>
  }
};
//
// const Cucumber = React.createClass ({
//   render: function() {
//     return <li>Cucumber</li>;
//   }
// });
//
// const Kale = React.createClass ({
//   render: function() {
//     return <li>Kale</li>;
//   }
// });

ReactDOM.render(<App />, document.getElementById('app'));
