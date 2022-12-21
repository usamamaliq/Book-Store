const STATUS = 'categories/categories/CHECK_STATUS';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case STATUS:
      return 'Under construction';

    default:
      return state;
  }
}

export const Status = () => ({
  type: STATUS,
});
