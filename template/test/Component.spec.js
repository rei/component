import { mount } from '@vue/test-utils';
import { expect } from 'chai';

import MainComponent from '../src/{{pascalcase name}}.vue';

describe('Main component tests', () => {
  const wrapper = mount(MainComponent);
  it('should mount without crashing', () => {
    expect(wrapper.isVueInstance()).to.equal(true);
  });
});
