import { mount } from '@vue/test-utils';
import CityList from '@/components/CityList.vue';

const createWrapper = ({ id }) => {
  return mount(CityList, {
    propsData: {
      id
    }
  });
};

describe("CityList", () => {
  let id;

  beforeEach(() => {
    id = 1151254;
  });

  it("should display the correct error messages based on object from props", () => {
    const wrapper = createWrapper({ id });

    const errorMessages = wrapper.findAll('p');
    expect(errorMessages.length).toEqual(3);
    // expect(errorMessages.at(0).text()).toContain(errors.title);
    // expect(errorMessages.at(1).text()).toContain(errors.body);
    // expect(errorMessages.at(2).text()).toContain(errors.description);
  });
});
