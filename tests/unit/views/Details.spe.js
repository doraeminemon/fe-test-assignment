import { mount } from '@vue/test-utils';
import Details from '@/views/Details.vue';

const createWrapper = ({ id }) => {
  return mount(Details, {
    propsData: {
      id
    }
  });
};

describe("Details", () => {
  let id;

  beforeEach(() => {
    id = 1151254;
  });

  it("should display the correct error messages based on object from props", () => {
    const wrapper = createWrapper({ id });

    const errorMessages = wrapper.findAll("li");
    expect(errorMessages.length).toEqual(3);
    // expect(errorMessages.at(0).text()).toContain(errors.title);
    // expect(errorMessages.at(1).text()).toContain(errors.body);
    // expect(errorMessages.at(2).text()).toContain(errors.description);
  });

  // it("should have props with errors as type object", () => {
  //   const wrapper = createWrapper({ errors });
  //   expect(typeof wrapper.props().errors).toBe("object");
  // });

  // it("should have no errors if no errors are passed into the props", () => {
  //   errors = {};

  //   const wrapper = createWrapper({ errors });

  //   const errorMessages = wrapper.findAll("li");
  //   expect(errorMessages.length).toEqual(0);
  // });
});