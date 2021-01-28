---
to: src/containers/<%= name %>/index.jsx
---
import React from 'react';
import PropTypes from 'prop-types';

class <%= name %> extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div></div>
    );
  }
}

<%= name %>.propTypes = {
};
<%= name %>.defaultProps = {
};

export default <%= name %>;