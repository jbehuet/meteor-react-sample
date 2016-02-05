Giphy = React.createClass({
    getInitialState: function() {
        return {
          word:'',
          giphy: null,
          loaded: false
        };
    },
    componentWillMount(){
        this.handleClick(null); 
    },
    handleClick: function(e){
        $.get('http://randomword.setgetgo.com/get.php', function(word){
            this.setState({ 
                word: word,
                loaded: false 
            });
            $.get('http://api.giphy.com/v1/gifs/search?q=' + word + '&api_key=dc6zaTOxFJmzC', function (result) {
                if (result.data.length > 0){
                    this.setState({
                        giphy: result.data,
                        loaded: true
                    });
                } else {
                    this.handleClick(e);
                }
            }.bind(this));
        }.bind(this))  
    },
    render() {
        return (
            <div>
                <header>
                    <h1>Giphy randomize</h1>
                </header>
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-primary" type="submit" onClick={this.handleClick} disabled={!this.state.loaded}>Random</button>
                        <p>Result for "<b>{this.state.word}</b>" :</p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-12">
                       {function(){
                        if (this.state.giphy && this.state.loaded) {
                            var table = [];
                            for (var i = 0; i < this.state.giphy.length; i++ ){
                                if (i < 6)
                                    table.push(<tr><td><img src={this.state.giphy[i].images.fixed_height.url} height="200px"/></td>
                                            <td><img src={this.state.giphy[i+1] ? this.state.giphy[i+1].images.fixed_height.url : 'http://imagesdeco.hoteletlodgesas.netdna-cdn.com/wp-content/themes/valenti/library/images/cb-404.png'} height="200px"/></td></tr>);
                                else
                                    break;
                                i++;
                            }
                            
                            return <table>{table}</table>;
                        } else {
                            return <p>Searching ...</p>
                        } 
                        }.call(this)}
                    </div>
                </div>   
            </div>
        )
    }
});