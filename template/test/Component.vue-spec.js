import { mount } from '@vue/test-utils';
import { expect } from 'chai';

import MainComponent from '../src/components/{{pascalcase name}}.vue';

describe('Main component tests', () => {
  const wrapper = mount(MainComponent, {
    propsData: {
      title: 'test',
      description: 'test',
      accordionLabel: 'test'
    },
  });
  it('should mount without crashing', () => {
    expect(wrapper.isVueInstance()).to.equal(true);
  });
});
