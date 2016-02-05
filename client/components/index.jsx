Index = React.createClass({  
  getInitialState: function() {
    return {
      weather:{},
      temperature:''
    };
  },
  componentWillMount() {
    this.serverRequest = $.get('http://api.openweathermap.org/data/2.5/weather?q=Nogent-Le-Rotrou&units=metric&appid=44db6a862fba0b067b1930da0d769e98', function (result) {
      this.setState({
        weather: result.weather[0],
        temperature: result.main.temp
      });
    }.bind(this));
  },
  render() {
    return (
        <div>
            <header>
                <h1>Météo de Nogent-Le-Rotrou</h1>
            </header>
            <div className="row">
                <div className="col-xs-12">
                    <img src={'//openweathermap.org/img/w/' + this.state.weather.icon + '.png'}/> {this.state.temperature}°C
                    <p>This is the index route.</p>
                </div>
            </div>
        </div>
    );
  }
});
