import ResizeObserver from 'resize-observer-polyfill';

export function initialize() {
  if (typeof FastBoot === 'undefined' && !window.ResizeObserver) {
    window.ResizeObserver = ResizeObserver;
  }
}

export default {
  initialize,
};
