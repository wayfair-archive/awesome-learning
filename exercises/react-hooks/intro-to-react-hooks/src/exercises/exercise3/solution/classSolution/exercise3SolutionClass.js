import React, { Component } from 'react';
import { getMemeInformation } from './../../utilities';
import MemeTemplatesBrowser from './MemeTemplatesBrowser';
import MemeTemplateInformation from './MemeTemplateInformation';

class MemeExplorer extends Component {
  state = {
    selectedMemeLink: '',
    selectedMemeDetails: null
  };

  // Classes versus hooks:
  // In a class component, we must manually
  // compare the previous state or props
  // and choose what "side effect" to run
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.selectedMemeLink !==
      this.state.selectedMemeLink
    ) {
      getMemeInformation(
        this.state.selectedMemeLink
      ).then((response) => {
        this.setState({
          selectedMemeDetails: response
        });
      });
    }
  }

  handleDropdownChange = (event) => {
    this.setState({
      selectedMemeLink: event.target.value
    });
  };

  render() {
    return (
      <section>
        <MemeTemplatesBrowser
          onSelectChange={
            this.handleDropdownChange
          }
        />
        {this.state.selectedMemeDetails && (
          <MemeTemplateInformation
            selectedMemeDetails={
              this.state.selectedMemeDetails
            }
          />
        )}
      </section>
    );
  }
}

export default MemeExplorer;
