import React from 'react';
import { shallow } from 'enzyme';

import { ExampleWorkBubble } from '../js/ExampleWorkBubble';

describe("ExampleWork component", () => {
  let workExamples;

  beforeEach(() => {
    workExamples = {
        img: {
          src: 'images/example1.png',
          alt: 'example screenshot of a project involving code'
        },
        title: 'Work Example'
      };

  });

  it("should be a 'div' element", () => {
    const component = shallow(<ExampleWorkBubble { ...workExamples } />);

    expect(component.type()).toEqual('div');
  });
});