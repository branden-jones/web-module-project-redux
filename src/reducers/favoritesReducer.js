const initialState = {
  favorites: [
    {
      title: "Movie",
      id: 42,
    },
  ],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default favoritesReducer;
