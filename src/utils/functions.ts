export const removeMessage = (setState: (value: string) => void) => {
  setTimeout(() => {
    setState('');
  }, 5000);
};
