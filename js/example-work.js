import React, { Component } from 'react';

import ExampleWorkBubble from './ExampleWorkBubble';

class ExampleWork extends Component {
  render() {
    const workExamples = [
      {
        id: 1,
        img: {
          src: 'images/example1.png',
          alt: 'example screenshot of a project involving code'
        },
        title: 'Work Example'
      },
      {
        id: 2,
        img: {
          src: 'images/example2.png',
          alt: 'example screenshot of a project involving code'
        },
        title: 'Work Example'
      },
      {
        id: 3,
        img: {
          src: 'images/example3.png',
          alt: 'example screenshot of a project involving code'
        },
        title: 'Work Example'
      }
    ];

    return (
      <section className="section section--alignCentered section--description">
        {
          workExamples.map(example => <ExampleWorkBubble { ...example } key={ example.id } />) 
        }
      </section>
    );
  }
}

export default ExampleWork;