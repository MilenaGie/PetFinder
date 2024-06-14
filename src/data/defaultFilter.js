function getDefaultFilter() {
  const defaultFilter = {
    types: "all",
    filters: {
      pet_type: 999,
      pet_breed: 999,
      color: 999,
      date_action: {
        from: 999,
        to: 999,
      },
      date_added: {
        from: 999,
        to: 999,
      }
    },
  };
  return defaultFilter;
}

export default getDefaultFilter;
