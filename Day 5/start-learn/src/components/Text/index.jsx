import React from 'react';

// export const Text = (props) => {
//   return <h1>{props.text}</h1>;
// };

export default class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
