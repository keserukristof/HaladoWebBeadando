import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class Form extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    equipment: '',
    bait: '',
    fishing_pole: '',
    preferred_technique: '',
    lake: '',
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      equipment: '',
      bait: '',
      fishing_pole: '',
      preferred_technique: '',
      lake: '',
    });
  };

  render() {
    return (
      <form>
        <TextField
          name='firstName'
          label='First Name'
          value={this.state.firstName}
          onChange={(e) => this.change(e)}
        />
        <br />
        <TextField
          name='lastName'
          label='Last Name'
          value={this.state.lastName}
          onChange={(e) => this.change(e)}
        />
        <br />
        <TextField
          name='equipment'
          label='Equipment'
          value={this.state.equipment}
          onChange={(e) => this.change(e)}
        />
        <br />
        <TextField
          name='bait'
          label='Bait'
          value={this.state.bait}
          onChange={(e) => this.change(e)}
        />
        <br />
        <TextField
          name='fishing_pole'
          label='Fishing Pole'
          value={this.state.fishing_pole}
          onChange={(e) => this.change(e)}
        />
        <br />
        <TextField
          name='preferred_technique'
          label='Preferred Technique'
          value={this.state.preferred_technique}
          onChange={(e) => this.change(e)}
        />
        <br />
        <TextField
          name='lake'
          label='Lake'
          value={this.state.lake}
          onChange={(e) => this.change(e)}
        />
        <br />
        <Button
          className='btn'
          onClick={(e) => this.onSubmit(e)}
          variant='contained'
          color='primary'
        >
          Submit
        </Button>
      </form>
    );
  }
}
