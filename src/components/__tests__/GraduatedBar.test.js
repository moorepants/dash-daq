/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';

import GraduatedBar from '../GraduatedBar.react';
import { Container, Block, Value } from '../../styled/GraduatedBar.styled';
import Label from '../../styled/shared/Label.styled';
import DarkThemeProvider from '../DarkThemeProvider.react';

describe('Graduated Bar', () => {
  it('renders', () => {
    const component = mount(<GraduatedBar />);
    expect(component).toBeTruthy();
  });

  it('renders dark theme', () => {
    const component = mount(
      <DarkThemeProvider>
        <GraduatedBar label="test" />
      </DarkThemeProvider>
    );
    expect(component).toBeTruthy();
  });

  it('renders with non finite percentage', () => {
    const component = mount(<GraduatedBar min={'invalidValue'} />);
    expect(component).toBeTruthy();
  });

  it('renders correct amount of blocks', () => {
    const component = shallow(<GraduatedBar min={0} max={100} value={49} step={1} />);
    expect(component.find(Block)).toHaveLength(49);
  });

  it('shows current value if set', () => {
    const component = mount(shallow(<GraduatedBar value={5} showCurrentValue={true} />).get(0));

    const currValue = component.find(Value);
    expect(currValue).toHaveLength(1);
    expect(currValue.text()).toBe('50%');
  });

  it('does not show current value if not set', () => {
    const component = mount(shallow(<GraduatedBar value={5} />).get(0));

    expect(component.find(Value)).toHaveLength(0);
  });

  it('has assigned className', () => {
    const component = mount(<GraduatedBar className="testClass" />);
    expect(component.hasClass('testClass')).toBeTruthy();
  });

  it('has assigned styles', () => {
    const style = { width: '600px' };
    const component = mount(<GraduatedBar style={style} />);

    expect(component.prop('style')).toBe(style);
  });

  it('has assigned id', () => {
    const component = mount(<GraduatedBar id="testId" />);
    expect(component.find('#testId')).toHaveLength(1);
  });

  it('positions label correctly', () => {
    const component = mount(<GraduatedBar label="Test label" labelPosition="bottom" />);
    expect(component.find(Label).prop('position')).toBe('bottom');
  });

  it('handles custom label style', () => {
    const component = mount(
      <GraduatedBar label={{ label: 'Test Label', style: { color: 'blue' } }} />
    );
    const label = component.find(Label);

    expect(label).toHaveLength(1);
    expect(label.prop('style').color).toBe('blue');
  });
});
