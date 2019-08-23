import { mount } from '@vue/test-utils';
import { expect } from 'chai';

import SampleChildComponent from '../src/components/SampleChildComponent.vue';
describe('SampleChildComponent', () => {
  describe('Renders When Passed Valid FAQs', () => {
    const wrapper = mount(SampleChildComponent, {
      propsData: {
        faqs: [
          {
            question: 'test a question',
            answer: 'test a answer',
            id: '1',
          },
          {
            question: 'test b question',
            answer: 'test b answer',
            id: '2',
          },
        ],
        accordionLabel: 'test accordion label'
      },
    });

    it('SampleChildComponent Should Mount', () => {
      expect(wrapper.isVueInstance()).to.equal(true);
    });

    it('Renders With FAQ Data', () => {
      expect(wrapper.contains('[data-ui="faq-section"]')).to.equal(true);
    });
  });

  describe('Does Not Render', () => {
    it('Does Not Render Without Data', () => {
      const wrapper = mount(SampleChildComponent, {
        propsData: {
          accordionLabel: 'missing data',
        },
      });
      expect(wrapper.contains('[data-ui="faq-section"]')).to.equal(false);
    });

    it('Does Not Render With Bad Data', () => {
      const wrapper = mount(SampleChildComponent, {
        propsData: {
          accordionLabel: 'bad data test',
          faqs: [{'bad': 'data'}],
        },
      });
      expect(wrapper.contains('[data-ui="faq-section"]')).to.equal(false);
    });
    it('Does Not Render With Partial Data', () => {
      const wrapper = mount(SampleChildComponent, {
        propsData: {
          accordionLabel: 'bad data test',
          faqs: [
            {'question': 'no answer'},
            {'answer': 'no question'},
          ],
        },
      });
      expect(wrapper.contains('[data-ui="faq-section"]')).to.equal(false);
    });
  });
});
