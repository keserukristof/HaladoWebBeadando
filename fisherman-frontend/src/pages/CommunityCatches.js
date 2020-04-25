import React, { Component } from 'react';

import axios from 'axios';

import { MuiThemeProvider } from '@material-ui/core/styles'; // v1.x

import './CommunityCatches.css';
import Form from '../components/community_catches/Form';
import Table from '../components/community_catches/Table';
import CatchesActions from '../actions/CatchesActions';
import CatchesStore from '../stores/CatchesStore';

class CommunityCatches extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.onChangeOfCatches = this.onChangeOfCatches.bind(this);
  }

  onChangeOfCatches() {
    this.setState({
      data: this.state.data.concat(CatchesStore._items[CatchesStore._items.length - 1]),
    });
  }

  componentDidMount() {
    axios.get('/catches').then((res) => {
      const catches = res.data;
      this.setState({ data: catches });
    });
    CatchesStore.addChangeListener(this.onChangeOfCatches);
  }

  componentWillUnmount() {
    CatchesStore.removeChangeListener(this.onChangeOfCatches);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className='container'>
          <Form
            onSubmit={(submission) => {
              // this.setState({
              //   data: [...this.state.data, submission],
              // });
              CatchesActions.addToTable(submission);
            }}
          />
          <Table
            data={this.state.data}
            header={[
              {
                name: 'First Name',
                prop: 'firstName',
              },
              {
                name: 'Last Name',
                prop: 'lastName',
              },
              {
                name: 'Equipment',
                prop: 'equipment',
              },
              {
                name: 'Bait',
                prop: 'bait',
              },
              {
                name: 'Fishing Pole',
                prop: 'fishing_pole',
              },
              {
                name: 'Preferred Technique',
                prop: 'preferred_technique',
              },
              {
                name: 'Lake',
                prop: 'lake',
              },
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CommunityCatches;
