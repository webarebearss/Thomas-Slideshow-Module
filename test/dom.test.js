import React from 'react';
import { shallow, mount, render } from './enzyme';

import PhotoModule from '../client/src/components/PhotoModule.jsx';

describe('<PhotoModule />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(PhotoModule.prototype, 'componentDidMount');
    const wrapper = mount(<PhotoModule />);
    expect(PhotoModule.prototype.componentDidMount).to.have.property('callCount', 1);
  });

  // it('allows us to set props', () => {
  //   const wrapper = mount(<Foo bar="baz" />);
  //   expect(wrapper.props().bar).to.equal('baz');
  //   wrapper.setProps({ bar: 'foo' });
  //   expect(wrapper.props().bar).to.equal('foo');
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = mount((
  //     <Foo onButtonClick={onButtonClick} />
  //   ));
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});