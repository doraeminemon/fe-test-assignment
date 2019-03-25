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

    const div = wrapper.findAll('div');
    expect(div.length).toEqual(1);
    expect(div.at(0).text()).toContain('CityList');
  });
});
