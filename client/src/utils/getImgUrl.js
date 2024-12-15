export const getImgUrl = (name) => {
  return new URL(`../assets/testimonials/${name}`, import.meta.url);
};
export const getServicesImgUrl = (name) => {
  return new URL(`../assets/services/${name}`, import.meta.url);
};
