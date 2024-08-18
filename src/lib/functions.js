export const formatReleaseDate = (releaseDate) => {
  const date = new Date(releaseDate);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};

export const averageRating = (rating) => {
  const formatRating = rating.toFixed(1);
  return formatRating;
};
