export const handleLinkClick = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 20; // Extra space from top
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
