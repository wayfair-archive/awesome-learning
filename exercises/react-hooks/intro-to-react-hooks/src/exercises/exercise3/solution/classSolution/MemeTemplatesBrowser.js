import React, { Component } from 'react';
import { getMemeTemplates } from './../../utilities';
import MemeTemplatesDropdown from '../../components/MemeTemplatesDropdown';

class MemeTemplatesBrowser extends Component {
  state = {
    memeTemplates: {}
  };

  // Classes versus hooks:
  // In a class component, if we ever wanted to re-fetch
  // the templates, we would need to also write componentDidUpdate
  // and put the getMemeTemplates() function call into another
  // function
  componentDidMount() {
    getMemeTemplates().then((response) => {
      this.setState({ memeTemplates: response });
    });
  }

  render() {
    return (
      <MemeTemplatesDropdown
        memes={this.state.memeTemplates}
        onChange={this.props.onSelectChange}
      />
    );
  }
}

export default MemeTemplatesBrowser;
