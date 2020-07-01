# ember-resize-observer-polyfill

<p>
  <a href="https://github.com/PrecisionNutrition/ember-resize-observer-polyfill/actions?query=workflow%3ACI" target="_blank" rel="noopener noreferrer">
    <img src="https://github.com/PrecisionNutrition/ember-resize-observer-polyfill/workflows/CI/badge.svg" alt="CI status">
  </a>

  <a href="https://www.npmjs.com/package/ember-resize-observer-polyfill" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/v/ember-resize-observer-polyfill?color=informational" alt="NPM version" />
  </a>
</p>

A polyfill of [ResizeObserver API][resize-observer] for Ember.

The addon relies on the [resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill), which is about `2.44 KB` gzipped and supports even IE10.

**Do you even need the polyfill?**

Current browser support for ResizeObserver: [caniuse.com][caniuse], [MDN: Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver#Browser_compatibility).

## Installation

```
ember install ember-resize-observer-polyfill
```

## Usage

Just install the addon.

## Related addons

- [ember-resize-observer-component][resize-observer-component]
- [ember-on-resize-modifier][on-resize-modifier]
- [ember-resize-observer-service][resize-observer-service]

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

[resize-observer]: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
[resize-observer-component]: https://github.com/PrecisionNutrition/ember-resize-observer-component
[resize-observer-service]: https://github.com/PrecisionNutrition/ember-resize-observer-service
[on-resize-modifier]: https://github.com/PrecisionNutrition/ember-on-resize-modifier
[caniuse]: https://caniuse.com/#feat=resizeobserver
