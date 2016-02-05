// A container component for basic views to be rendered in
App = React.createClass({
  render() {
    return (
      <div>
       <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand">Meteor & React</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/giphy">Giphy</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
          {/* Views will be rendered here */}
          {this.props.children}
        </div>
      </div>
    );
  }
});

$(document).ready(function() {
    ReactDOM.render(<Routes/>, document.getElementById('app'));
});