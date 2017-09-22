import React, { Component } from 'react';

class ExampleWorkBubble extends Component {
  render() {
    const { img, title } = this.props;

    return (
      <div className="section__exampleWrapper">
        <div className="section__example">
          <img alt={img.alt }
            className="section__exampleImage"
            src={ img.src } />
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              { title }
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    );
  }
}

export { ExampleWorkBubble };
export default ExampleWorkBubble;