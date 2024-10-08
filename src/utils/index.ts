// it full slide from right
export const rightAsideVariants = {
  hidden: {
    opacity: 0,
    translateX: "100%", // Slide in from the right
  },
  visible: {
    opacity: 1.5,
    translateX: "0%", // Slide to the center
    transition: {
      duration: 0.8, // Animation duration
      // ease: "easeInOut", // Easing function
    },
  },
};

export const leftAsideVariants = {
  hidden: {
    opacity: 0,
    translateX: "-100%", // Slide in from the left
  },
  visible: {
    opacity: 1.5,
    translateX: "0%", // Slide to the center
    transition: {
      duration: 0.8, // Animation duration
      // ease: "easeInOut", // Easing function
    },
  },
};

//? SET To LocalStorage
export const saveToLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

//? GET From LocalStorage
export const getFromLocalStorage = (key: string) => {
  return typeof window !== "undefined"
    ? localStorage.getItem(key) ?? null
    : null;
};

//? Remove from LocalStorage
export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
