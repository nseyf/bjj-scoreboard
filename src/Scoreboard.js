import React, { Component } from 'react';
import './App.css';

class Scoreboard extends Component {
constructor(props) {
super(props);

this.state = {

  playerOnePoints: 0,
  playerOnePenalties: 0,
  playerOneAdvantages: 0,
  playerTwoPoints: 0,
  playerTwoPenalties: 0,
  playerTwoAdvantages: 0,
  GameLength: 0,
  SecondsRemaining: 300,
  isPaused: true
}
this.handleTimer = this.handleTimer.bind(this);
 }


addPlayerOnePenalty(e) {

/*
this.setState({
  playerOne: {
   penalties: this.state.playerOne.penalties + 1
  }
})
*/
}

addPlayerTwoPenalty(e) {

}

/* BJJ Rules
two penalties: 1 adv for opponent;
three penalties: 2 points for opponent;
fourth penalties: disqualified
if points + adv are tied least penalties wins
if all is tied then ref decision
*/


handleTimer() {

const tick = setInterval(() => {

this.setState({ SecondsRemaining: this.state.SecondsRemaining - 1 })

  if(this.state.SecondsRemaining <= 0 || this.state.isPaused) {
    clearInterval(tick);
  }
}, 1000)


}

formatTime(seconds) {
  let m = Math.floor(seconds % 3600 / 60);
let s = Math.floor(seconds % 3600 % 60);
let timeFormatted = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
return timeFormatted;
}



  render() {

    return (
      <div className="App">
<div className="container">
<div className="row">
<div className="PlayerOne col-lg-6 col-xs-6">
<h1>{this.state.playerOnePoints}</h1>
<div className="row adv-pen">
<div className="col-xs-6 col-lg-6">
<h2 className="advantage">{this.state.playerOneAdvantages}</h2>
</div>
<div className="col-xs-6 col-lg-6">
<h2 className="penalty">{this.state.playerOnePenalties}</h2>
</div>
</div>
</div>
<div className="PlayerTwo col-lg-6 col-xs-6">
<h1>{this.state.playerTwoPoints}</h1>
  <div className="row adv-pen">
  <div className="col-xs-6 col-lg-6">
  <h2 className="advantage">{this.state.playerTwoAdvantages}</h2>
  </div>
  <div className="col-xs-6 col-lg-6">
  <h2 className="penalty">{this.state.playerTwoPenalties}</h2>
  </div>
  </div>
</div>
</div>
<div className="row timer text-center">
  {this.state.isPaused ?
<h2 className="timer off">{this.formatTime(this.state.SecondsRemaining)}</h2>
:
<h2 className="timer on">{this.formatTime(this.state.SecondsRemaining)}</h2>
}
</div>


<div className="row text-center buttons">

  <div className="player1buttons col-xs-6 col-lg-6">
    <div className="row">
      <div className="col-xs-6 col-lg-6">
    <h4>Points</h4>
    <div className="row">
  <button onClick={() => {this.setState({playerOnePoints: this.state.playerOnePoints + 2})}} className="btn points">+2</button>
  <button onClick={() => {this.setState({playerOnePoints: this.state.playerOnePoints + 3})}} className="btn points">+3</button>
  <button onClick={() => {this.setState({playerOnePoints: this.state.playerOnePoints + 4})}} className="btn points">+4</button>
  </div>
  <div className="row">
    <button onClick={() => {this.setState({playerOnePoints: this.state.playerOnePoints - 2})}} className="btn points">-2</button>
    <button onClick={() => {this.setState({playerOnePoints: this.state.playerOnePoints - 3})}} className="btn points">-3</button>
    <button onClick={() => {this.setState({playerOnePoints: this.state.playerOnePoints - 4})}} className="btn points">-4</button>
  </div>
</div>
  <div className="col-xs-6 col-lg-3 text-center">
    <h4>Adv</h4>
    <div className="row"><button onClick={() => {this.setState({playerOneAdvantages: this.state.playerOneAdvantages + 1})}} className="btn"><span className="glyphicon glyphicon-plus"></span></button></div>
    <div className="row"><button onClick={() => {this.setState({playerOneAdvantages: this.state.playerOneAdvantages - 1})}} className="btn"><span className="glyphicon glyphicon-minus"></span></button></div>
  </div>
  <div className="col-xs-6 col-lg-3 text-center">
    <h4>Pen</h4>
      <div className="row"><button className="btn" onClick={this.addPlayerOnePenalty.bind(this)}><span className="glyphicon glyphicon-plus"></span></button></div>
      <div className="row"><button className="btn"><span className="glyphicon glyphicon-minus"></span></button></div>
  </div>
</div>
</div>

<div className="player2buttons col-xs-6 col-lg-6">
  <div className="row">
  <div className="col-xs-6 text-center col-lg-6">
    <h4>Points</h4>
    <div className="row">
  <button onClick={() => {this.setState({playerTwoPoints: this.state.playerTwoPoints + 2})}} className="btn points">+2</button>
  <button onClick={() => {this.setState({playerTwoPoints: this.state.playerTwoPoints + 3})}} className="btn points">+3</button>
  <button onClick={() => {this.setState({playerTwoPoints: this.state.playerTwoPoints + 4})}} className="btn points">+4</button>
  </div>
  <div className="row">
    <button onClick={() => {this.setState({playerTwoPoints: this.state.playerTwoPoints - 2})}} className="btn points">-2</button>
    <button onClick={() => {this.setState({playerTwoPoints: this.state.playerTwoPoints - 3})}} className="btn points">-3</button>
    <button onClick={() => {this.setState({playerTwoPoints: this.state.playerTwoPoints - 4})}} className="btn points">-4</button>
  </div>
  </div>
    <div className="col-xs-6 col-lg-3 text-center">
      <h4>Adv</h4>
      <div className="row"><button onClick={() => {this.setState({playerTwoAdvantages: this.state.playerTwoAdvantages + 1})}} className="btn"><span className="glyphicon glyphicon-plus"></span></button></div>
      <div className="row"><button onClick={() => {this.setState({playerTwoAdvantages: this.state.playerTwoAdvantages - 1})}} className="btn"><span className="glyphicon glyphicon-minus"></span></button></div>
    </div>
    <div className="col-xs-6 col-lg-3 text-center">
      <h4>Pen</h4>
        <div className="row"><button className="btn"><span className="glyphicon glyphicon-plus"></span></button></div>
        <div className="row"><button className="btn"><span className="glyphicon glyphicon-minus"></span></button></div>
    </div>
</div>
</div>
</div>
<div className="row main-controls text-center">
<button className="btn" onClick={() => {this.setState({SecondsRemaining: this.state.SecondsRemaining + 60 })}}><span className="glyphicon glyphicon-plus"></span></button>
<button className="btn" onClick={() => {
    if(this.state.SecondsRemaining !== 0) {
      this.setState({SecondsRemaining: this.state.SecondsRemaining - 60})
    }
  }}><span className="glyphicon glyphicon-minus"></span></button>
<button className="btn" onClick={() => {
    this.setState({isPaused: false}, this.handleTimer())
  }}>Start Timer</button>
<button className="btn" onClick={() => {
    this.setState({isPaused: true})
  }}>Pause Timer</button>
  <button className="btn" onClick={() => {
      this.setState({SecondsRemaining: 300})
    }}>Reset Timer</button>
</div>
</div>
</div>
    );
  }
}

export default Scoreboard;
