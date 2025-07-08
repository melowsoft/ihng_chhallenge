// src/setupTests.ts
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
// No import needed for afterEach if using Jest with globals
// If using ESM, use: import { afterEach } from '@jest/globals';

afterEach(() => {
  cleanup();
});

// Mock window.matchMedia which is not implemented in JSDOM
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

// Mock ResizeObserver which is not implemented in JSDOM
class ResizeObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

window.ResizeObserver = ResizeObserverMock;