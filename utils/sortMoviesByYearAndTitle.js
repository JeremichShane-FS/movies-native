export const sortMoviesByYearAndTitle = movies => {
  if (!Array.isArray(movies)) {
    console.error("Expected an array but received:", movies);
    return [];
  }

  return [...movies].sort((a, b) => {
    if (b.releaseYear !== a.releaseYear) {
      return b.releaseYear - a.releaseYear;
    }
    return a.title.localeCompare(b.title);
  });
};
