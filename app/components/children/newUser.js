// add dependencies
var React = require('react');

//codebase imports
var helpers = require('../utils/helpers');

var NewUser = React.createClass({

  getInitialState: function() {
    return {
      username: '',
      password: '',
      // interests: [],
      image: '',
      pods: []
    };
  },

  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleClick: function(event) {
    event.preventDefault();
    this.props.createUser(this.state.username, this.state.password, this.state.image);
    alert("You have been successfully added");
    this.setState({username:'', password: '', image: ''}); 
    
  },

  // componentDidMount: function(){
  //   helpers.getSaved().then(function() {
  //     var data = returned.data
  //     this.setState({saved: data})
  //   });
  // }
  //
  // componentDidUpdate: function() {
  //
  // }

  //redirect to the Main.js "/" route

  render: function() {
        return (
              <div>
                <div className="spacer"></div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body text-center">
                          <h2 className="panel-title text-center loopy">Search</h2>
                            <form>
                                <div className="form-group">
                                    <h4 className=""><strong>Username</strong></h4>
                                    <input type="text" className="form-control text-center" id="username" placeholder="Enter your username." onChange= {this.handleChange} required/>
                                    <br />
                                    <h4 className=""><strong>Password</strong></h4>
                                    <input type="text" className="form-control text-center" id="password" placeholder="Enter your password." onChange= {this.handleChange} required/>
                                    <br />
                                    <h4 className=""><strong>Image</strong></h4>
                                    <input type="text" className="form-control text-center" id="image" placeholder="Enter your image link." onChange= {this.handleChange} required/>
                                    <br />
                                    {/* <h4 className=""><strong>End Year</strong></h4>
                                    <input type="text" className="form-control text-center" id="endYear" placeholder="2017"onChange= {this.handleChange} required/>
                                    <br /> */}
                                    <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit My Info</button>     
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* {db.User.save({username: this.state.username, password: this.state.password, image: this.state.image, pods: this.state.pods})} */}        
                </div>
            </div>
      )
    }
});

//exports the User
module.exports = NewUser;
