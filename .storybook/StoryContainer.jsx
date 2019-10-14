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
            padding: '3em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {story()}
        </div>
      </React.StrictMode>
    );
  }
}