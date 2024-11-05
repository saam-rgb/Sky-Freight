export const getImgUrl = (name) => {
  return new URL(`../assets/testimonials/${name}`, import.meta.url);
};
