import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

const storedValues = new Map<string, string>();
const localStorageStub: Storage = {
  get length() {
    return storedValues.size;
  },
  clear() {
    storedValues.clear();
  },
  getItem(key) {
    return storedValues.get(key) ?? null;
  },
  key(index) {
    return [...storedValues.keys()][index] ?? null;
  },
  removeItem(key) {
    storedValues.delete(key);
  },
  setItem(key, value) {
    storedValues.set(key, value);
  },
};

Object.defineProperty(window, "localStorage", {
  configurable: true,
  value: localStorageStub,
});

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});
