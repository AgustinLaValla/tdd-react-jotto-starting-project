export const findByTestAtrr = (wrapper, val) =>
    wrapper.find(`[data-test="${val}"]`);
