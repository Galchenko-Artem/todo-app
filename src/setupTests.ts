import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: (query: string) => ({
    matches: false,
    media: query || '',
    onchange: null,
    addListener: () => {}, 
    removeListener: () => {},
    addEventListener: () => {}, 
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

