## 📦 Bundle size comparison

> [!WARNING]
> Reports were built with different transform options (`unstable_transformProfile`: `undefined` → `default`), size comparison may be misleading.

|  | Before | After | Δ |
| --- | ---: | ---: | ---: |
| **Platform** | ios | ios |  |
| **Total size** | 761.1 KB | 779.73 KB | 📈 +18.63 KB (+2.45%) |
| **Modules** | 426 | 439 | +13 |
| **Packages** | 21 | 22 | +1 |

### 📦 Packages

<details>
<summary>➕ Added packages (4)</summary>

| Package | Version | Size |
| --- | --- | ---: |
| `@react-native/virtualized-lists` | 0.72.8 | 52.73 KB |
| `@react-native/normalize-colors` | 0.72.0 | 7.38 KB |
| `@react-native/js-polyfills` | 0.72.1 | 6.75 KB |
| `@react-native/assets-registry` | 0.72.0 | 1.01 KB |

</details>

<details>
<summary>➖ Removed packages (3)</summary>

| Package | Version | Size |
| --- | --- | ---: |
| `@react-native/normalize-color` | 2.1.0 | 7.38 KB |
| `@react-native/polyfills` | 2.0.0 | 6.75 KB |
| `@react-native/assets` | 1.0.0 | 969 Bytes |

</details>

<details>
<summary>🔄 Version changes (4)</summary>

| Package | Before | After | Δ |
| --- | --- | --- | ---: |
| `react-native` | 0.71.19 | 0.72.17 | -34.28 KB |
| `deprecated-react-native-prop-types` | 3.0.2 | 4.2.3 | +616 Bytes |
| `scheduler` | 0.23.2 | 0.24.0-canary-efb381bbf-20230505 | +202 Bytes |
| `metro-runtime` | 0.73.10 | 0.76.9 | +84 Bytes |

</details>

### 📄 Modules

<details>
<summary>🆕 Added modules (39, +91.99 KB)</summary>

| Module | Size |
| --- | ---: |
| `node_modules/@react-native/virtualized-lists/Lists/VirtualizedList.js` | 28.16 KB |
| `node_modules/@react-native/normalize-colors/index.js` | 7.38 KB |
| `node_modules/@react-native/virtualized-lists/Lists/VirtualizedSectionList.js` | 6.85 KB |
| `node_modules/@react-native/js-polyfills/console.js` | 5.3 KB |
| `node_modules/react-native/Libraries/WebPerformance/Performance.js` | 4.24 KB |
| `node_modules/scheduler/cjs/scheduler.native.production.min.js` | 4.22 KB |
| `node_modules/react-native/Libraries/WebPerformance/PerformanceObserver.js` | 3.99 KB |
| `node_modules/@react-native/virtualized-lists/Lists/VirtualizedListCellRenderer.js` | 3.31 KB |
| `node_modules/@react-native/virtualized-lists/Lists/FillRateHelper.js` | 2.78 KB |
| `node_modules/@react-native/virtualized-lists/Lists/ViewabilityHelper.js` | 2.47 KB |
| `node_modules/react-native/Libraries/Components/TraceUpdateOverlay/TraceUpdateOverlay.js` | 2.04 KB |
| `node_modules/@react-native/virtualized-lists/Lists/StateSafePureComponent.js` | 1.9 KB |
| `node_modules/@react-native/virtualized-lists/Lists/CellRenderMask.js` | 1.76 KB |
| `node_modules/@react-native/virtualized-lists/Lists/VirtualizeUtils.js` | 1.68 KB |
| `node_modules/react-native/Libraries/DOM/Geometry/DOMRectReadOnly.js` | 1.54 KB |
| `node_modules/@react-native/virtualized-lists/Lists/VirtualizedListContext.js` | 1.4 KB |
| `node_modules/@react-native/virtualized-lists/Lists/ChildListCollection.js` | 1.28 KB |
| `node_modules/react-native/Libraries/WebPerformance/RawPerformanceEntry.js` | 1.14 KB |
| `node_modules/react-native/Libraries/DOM/Geometry/DOMRect.js` | 1.09 KB |
| `node_modules/react-native/Libraries/WebPerformance/ReactNativeStartupTiming.js` | 917 Bytes |
| `node_modules/@react-native/js-polyfills/error-guard.js` | 912 Bytes |
| `node_modules/react-native/Libraries/WebPerformance/PerformanceEventTiming.js` | 901 Bytes |
| `node_modules/@react-native/assets-registry/path-support.js` | 885 Bytes |
| `node_modules/react-native/Libraries/WebPerformance/EventCounts.js` | 797 Bytes |
| `node_modules/@react-native/virtualized-lists/Interaction/Batchinator.js` | 643 Bytes |
| `node_modules/react-native/Libraries/Components/TraceUpdateOverlay/TraceUpdateOverlayNativeComponent.js` | 639 Bytes |
| `node_modules/@react-native/js-polyfills/Object.es8.js` | 567 Bytes |
| `node_modules/react-native/Libraries/WebPerformance/MemoryInfo.js` | 558 Bytes |
| `node_modules/react-native/Libraries/WebPerformance/NativePerformanceObserver.js` | 541 Bytes |
| `node_modules/react-native/Libraries/WebPerformance/NativePerformance.js` | 533 Bytes |
| `node_modules/react-native/Libraries/WebPerformance/PerformanceEntry.js` | 467 Bytes |
| `node_modules/@react-native/virtualized-lists/index.js` | 333 Bytes |
| `node_modules/react-native/Libraries/Renderer/public/ReactFabricPublicInstanceUtils.js` | 313 Bytes |
| `node_modules/react-native/Libraries/ReactNative/FabricUIManager.js` | 156 Bytes |
| `node_modules/@react-native/assets-registry/registry.js` | 148 Bytes |
| `node_modules/react-native/Libraries/Core/setUpDOM.js` | 120 Bytes |
| `node_modules/@react-native/virtualized-lists/Utilities/infoLog.js` | 112 Bytes |
| `node_modules/@react-native/virtualized-lists/Utilities/clamp.js` | 91 Bytes |
| `node_modules/scheduler/index.native.js` | 61 Bytes |

</details>

<details>
<summary>🗑️ Removed modules (26, -42.99 KB)</summary>

| Module | Size |
| --- | ---: |
| `node_modules/@react-native/normalize-color/index.js` | 7.38 KB |
| `node_modules/@react-native/polyfills/console.js` | 5.31 KB |
| `node_modules/scheduler/cjs/scheduler.production.min.js` | 4.03 KB |
| `node_modules/react-native/Libraries/Lists/VirtualizedListCellRenderer.js` | 3.36 KB |
| `node_modules/react-native/Libraries/Lists/FillRateHelper.js` | 2.76 KB |
| `node_modules/react-native/Libraries/Components/DatePicker/DatePickerIOS.ios.js` | 2.62 KB |
| `node_modules/react-native/Libraries/Lists/ViewabilityHelper.js` | 2.44 KB |
| `node_modules/react-native/Libraries/Lists/StateSafePureComponent.js` | 1.9 KB |
| `node_modules/react-native/Libraries/Lists/CellRenderMask.js` | 1.74 KB |
| `node_modules/react-native/Libraries/Lists/VirtualizeUtils.js` | 1.68 KB |
| `node_modules/react-native/Libraries/Components/Slider/Slider.js` | 1.55 KB |
| `node_modules/react-native/Libraries/Lists/VirtualizedListContext.js` | 1.4 KB |
| `node_modules/react-native/Libraries/Lists/ChildListCollection.js` | 1.26 KB |
| `node_modules/@react-native/polyfills/error-guard.js` | 912 Bytes |
| `node_modules/@react-native/assets/path-support.js` | 821 Bytes |
| `node_modules/react-native/Libraries/Components/DatePicker/RCTDatePickerNativeComponent.js` | 707 Bytes |
| `node_modules/react-native/Libraries/Components/ProgressViewIOS/ProgressViewIOS.ios.js` | 652 Bytes |
| `node_modules/react-native/Libraries/Interaction/Batchinator.js` | 597 Bytes |
| `node_modules/react-native/Libraries/Animated/createAnimatedComponentInjection.js` | 577 Bytes |
| `node_modules/@react-native/polyfills/Object.es8.js` | 567 Bytes |
| `node_modules/react-native/Libraries/Utilities/setAndForwardRef.js` | 210 Bytes |
| `node_modules/react-native/Libraries/Components/Slider/SliderNativeComponent.js` | 203 Bytes |
| `node_modules/react-native/Libraries/Components/ProgressViewIOS/RCTProgressViewNativeComponent.js` | 162 Bytes |
| `node_modules/@react-native/assets/registry.js` | 148 Bytes |
| `node_modules/react-native/Libraries/Utilities/clamp.js` | 91 Bytes |
| `node_modules/scheduler/index.js` | 61 Bytes |

</details>

<details>
<summary>🔀 Changed modules (106, net -30.36 KB)</summary>

| Module | Before | After | Δ |
| --- | ---: | ---: | ---: |
| `node_modules/react-native/Libraries/Lists/VirtualizedList.js` | 25.9 KB | 77 Bytes | 📉 -25.83 KB |
| `node_modules/react-native/Libraries/Lists/VirtualizedSectionList.js` | 6.86 KB | 84 Bytes | 📉 -6.78 KB |
| `node_modules/react-native/Libraries/Animated/createAnimatedComponent.js` | 5.15 KB | 916 Bytes | 📉 -4.25 KB |
| `node_modules/react-native/Libraries/ReactNative/UIManager.js` | 85 Bytes | 1.46 KB | 📈 +1.38 KB |
| `node_modules/react-native/index.js` | 6.5 KB | 5.59 KB | 📉 -924 Bytes |
| `node_modules/react-native/Libraries/Utilities/createPerformanceLogger.js` | 2.65 KB | 3.51 KB | 📈 +888 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedInterpolation.js` | 3.52 KB | 4.04 KB | 📈 +531 Bytes |
| `node_modules/react-native/Libraries/NativeComponent/BaseViewConfig.ios.js` | 4.99 KB | 5.38 KB | 📈 +392 Bytes |
| `node_modules/react-native/Libraries/ReactNative/getCachedComponentWithDebugName.js` | 205 Bytes | 591 Bytes | 📈 +386 Bytes |
| `node_modules/react-native/Libraries/Components/View/ReactNativeStyleAttributes.js` | 1.89 KB | 2.26 KB | 📈 +385 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedStyle.js` | 2.31 KB | 2.68 KB | 📈 +385 Bytes |
| `node_modules/deprecated-react-native-prop-types/DeprecatedTextInputPropTypes.js` | 3.77 KB | 4.1 KB | 📈 +335 Bytes |
| `node_modules/react-native/Libraries/Blob/FileReader.js` | 2.19 KB | 2.49 KB | 📈 +301 Bytes |
| `node_modules/react-native/Libraries/Components/View/ViewNativeComponent.js` | 1.72 KB | 2.01 KB | 📈 +292 Bytes |
| `node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.native.production.js` | 915 Bytes | 633 Bytes | 📉 -282 Bytes |
| `node_modules/react/cjs/react-jsx-runtime.production.min.js` | 884 Bytes | 618 Bytes | 📉 -266 Bytes |
| `node_modules/react-native/Libraries/Components/ScrollView/ScrollView.js` | 15.71 KB | 15.96 KB | 📈 +260 Bytes |
| `node_modules/react/cjs/react.production.min.js` | 6.56 KB | 6.31 KB | 📉 -254 Bytes |
| `node_modules/react-native/Libraries/Utilities/Appearance.js` | 695 Bytes | 945 Bytes | 📈 +250 Bytes |
| `node_modules/react-native/Libraries/Core/setUpSegmentFetcher.js` | 411 Bytes | 184 Bytes | 📉 -227 Bytes |
| `node_modules/react-native/Libraries/Animated/NativeAnimatedHelper.js` | 7.77 KB | 7.92 KB | 📈 +162 Bytes |
| `node_modules/react-native/Libraries/Core/Devtools/parseHermesStack.js` | 776 Bytes | 936 Bytes | 📈 +160 Bytes |
| `node_modules/react-native/Libraries/Renderer/implementations/ReactFabric-prod.js` | 97.23 KB | 97.37 KB | 📈 +145 Bytes |
| `node_modules/deprecated-react-native-prop-types/DeprecatedViewStylePropTypes.js` | 1.02 KB | 1.16 KB | 📈 +144 Bytes |
| `node_modules/react-native/Libraries/Utilities/PixelRatio.js` | 493 Bytes | 624 Bytes | 📈 +131 Bytes |
| `node_modules/react-native/Libraries/ReactNative/AppContainer.js` | 2.46 KB | 2.58 KB | 📈 +121 Bytes |
| `node_modules/react-native/Libraries/vendor/emitter/EventEmitter.js` | 842 Bytes | 954 Bytes | 📈 +112 Bytes |
| `node_modules/react-native/Libraries/Utilities/GlobalPerformanceLogger.js` | 79 Bytes | 185 Bytes | 📈 +106 Bytes |
| `node_modules/deprecated-react-native-prop-types/DeprecatedLayoutPropTypes.js` | 1.81 KB | 1.91 KB | 📈 +105 Bytes |
| `node_modules/react-native/Libraries/Pressability/Pressability.js` | 11.02 KB | 11.11 KB | 📈 +92 Bytes |
| `node_modules/react-native/Libraries/Utilities/Dimensions.js` | 1.02 KB | 1.11 KB | 📈 +88 Bytes |
| `node_modules/metro-runtime/src/polyfills/require.js` | 1.94 KB | 2.02 KB | 📈 +84 Bytes |
| `node_modules/react-native/Libraries/UTFSequence.js` | 354 Bytes | 433 Bytes | 📈 +79 Bytes |
| `node_modules/react-native/Libraries/EventEmitter/RCTDeviceEventEmitter.js` | 143 Bytes | 221 Bytes | 📈 +78 Bytes |
| `node_modules/react-native/Libraries/Components/ScrollView/ScrollViewNativeComponent.js` | 3.14 KB | 3.21 KB | 📈 +77 Bytes |
| `node_modules/react-native/Libraries/Linking/Linking.js` | 1.79 KB | 1.72 KB | 📉 -77 Bytes |
| `node_modules/react-native/Libraries/Components/TextInput/AndroidTextInputNativeComponent.js` | 2.7 KB | 2.78 KB | 📈 +75 Bytes |
| `node_modules/react-native/Libraries/Core/setUpPerformance.js` | 190 Bytes | 259 Bytes | 📈 +69 Bytes |
| `node_modules/react-native/Libraries/Components/ActivityIndicator/ActivityIndicator.js` | 1.49 KB | 1.56 KB | 📈 +69 Bytes |
| `node_modules/react-native/Libraries/Network/RCTNetworking.ios.js` | 513 Bytes | 579 Bytes | 📈 +66 Bytes |
| `node_modules/react-native/Libraries/StyleSheet/processColor.js` | 249 Bytes | 315 Bytes | 📈 +66 Bytes |
| `node_modules/react-native/Libraries/ReactNative/requireNativeComponent.js` | 114 Bytes | 180 Bytes | 📈 +66 Bytes |
| `node_modules/react-native/Libraries/Components/ScrollView/ScrollViewStickyHeader.js` | 2.97 KB | 2.91 KB | 📉 -66 Bytes |
| `node_modules/react-native/Libraries/LogBox/LogBox.js` | 290 Bytes | 356 Bytes | 📈 +66 Bytes |
| `node_modules/react-native/Libraries/Interaction/PanResponder.js` | 3.02 KB | 3.08 KB | 📈 +66 Bytes |
| `node_modules/react-native/Libraries/Components/TextInput/TextInput.js` | 8.87 KB | 8.94 KB | 📈 +65 Bytes |
| `node_modules/react-native/Libraries/Network/XMLHttpRequest.js` | 9.19 KB | 9.25 KB | 📈 +63 Bytes |
| `node_modules/react-native/Libraries/Blob/Blob.js` | 927 Bytes | 980 Bytes | 📈 +53 Bytes |
| `node_modules/react-native/Libraries/Blob/URL.js` | 3.58 KB | 3.63 KB | 📈 +53 Bytes |
| `node_modules/react-native/Libraries/Image/AssetSourceResolver.js` | 1.68 KB | 1.73 KB | 📈 +50 Bytes |

_...and 56 more (use `--limit` to show more)._

</details>
