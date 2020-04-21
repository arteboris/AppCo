import { Type } from './pageActions';

const pageReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_PAGE_SUCCESS:
      return payload.page;
    default:
      return state;
  }
};

export default pageReducer;
