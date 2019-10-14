import React, { Component } from 'react';

export default class StoryContainer extends Component {

  render() {
    const { story } = this.props;

    return (
      <React.StrictMode>
        <div
          data-floating-menu-container
          role="main"
          style={{
            padding: '3em 5em',
            display: 'flex',
            flexDirection: 'column'
          }}>
          {story()}
        </div>
      </React.StrictMode>
    );
  }
}