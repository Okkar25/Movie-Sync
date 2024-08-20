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
  if (!rating || isNaN(rating)) return "N/A"; // Handle invalid ratings
  return rating.toFixed(1);
};

export const formatDuration = (totalMinutes) => {
  if (!totalMinutes || isNaN(totalMinutes)) return "N/A"; // Handle invalid durations
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
};

export const formatRating = (rating) => {
  if (!rating || isNaN(rating)) return "N/A"; // Handle invalid ratings
  const roundedRating = Math.round(rating * 10) / 10; // Round to one decimal place
  return roundedRating % 1 === 0 ? Math.floor(roundedRating) : roundedRating;
};

export const formatAmount = (amount) => {
  if (amount >= 1_000_000_000) {
    // Convert to billions
    return `${(amount / 1_000_000_000).toFixed(1)}B`;
  } else if (amount >= 1_000_000) {
    // Convert to millions
    return `${(amount / 1_000_000).toFixed(1)}M`;
  } else if (amount >= 1_000) {
    // Convert to thousands
    return `${(amount / 1_000).toFixed(1)}K`;
  } else {
    // No conversion needed
    return amount === 0 ? "N/A" : amount?.toString();
  }
};
