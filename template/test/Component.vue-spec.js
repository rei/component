import { mount } from '@vue/test-utils';
import { expect } from 'chai';

import {{pascalcase name}} from '../src/components/{{pascalcase name}}.vue';

describe('{{pascalcase name}}', () => {
  describe('Renders With Valid Data', () => {
    const wrapper = mount({{pascalcase name}}, {
      propsData: {
        title: 'test title',
        description: 'test description',
        accordionLabel: 'test accordion label',
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
      },
    });

    it('Component Should Mount', () => {
      expect(wrapper.isVueInstance()).to.equal(true);
    });
    describe('Toggle FAQs', () => {
      it('Button Toggles FAQs Section Off', () => {
        wrapper.find('[data-ui="toggle-faq-button"]').trigger('click');
        expect(wrapper.vm.showFaqs).to.eql(false);
        expect(wrapper.contains('[data-ui="faq-section"]')).to.equal(false);
      });
      it('Button Toggles FAQs Section Back On', () => {
        wrapper.find('[data-ui="toggle-faq-button"]').trigger('click');
        expect(wrapper.vm.showFaqs).to.eql(true);
        expect(wrapper.contains('[data-ui="faq-section"]')).to.equal(true);
      });
    });
  });
  describe('Handle Missing Props', () => {
    const wrapper = mount({{pascalcase name}});

    it('Component Should Mount', () => {
      expect(wrapper.isVueInstance()).to.equal(true);
    });
    it('Renders Fallback Messaging and Defaults', () => {
      expect(wrapper.find('[data-ui="title"]').text()).to.equal('Title Not Set');
      expect(wrapper.find('[data-ui="description"]').text()).to.equal('Description Not Set');
      expect(wrapper.vm.faqs).to.eql([]);
    });
  });
});
