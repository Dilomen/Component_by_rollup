import React from 'react';
import './index.scss';

class Space extends React.Component {
  renderSpaceCps = () => {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      <div className="serein-space-wrap" style={{ display: 'inline-flex' }}>
        {React.Children.map(children, (child) => <div style={{ marginRight: '8px' }}>{child}</div>)}
      </div>
    );
  };

  render () {
    return <>{this.renderSpaceCps()}</>;
  }
}

export default Space;
