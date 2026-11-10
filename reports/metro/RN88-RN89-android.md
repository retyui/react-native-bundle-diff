## 📦 Bundle size comparison

> [!WARNING]
> Reports were built with different transform options (`unstable_transformProfile`: `default` → `hermes-stable`), size comparison may be misleading.

|  | Before | After | Δ |
| --- | ---: | ---: | ---: |
| **Platform** | android | android |  |
| **Total size** | 859.42 KB | 736.54 KB | 📉 -122.87 KB (-14.3%) |
| **Modules** | 534 | 513 | -21 |
| **Packages** | 19 | 19 | 0 |

### 📦 Packages

<details>
<summary>🔄 Version changes (7)</summary>

| Package | Before | After | Δ |
| --- | --- | --- | ---: |
| `react-native` | 0.88.1 | 0.89.0-rc.0 | -111.9 KB |
| `@react-native/virtualized-lists` | 0.88.1 | 0.89.0-rc.0 | -3.12 KB |
| `@react-native/new-app-screen` | 0.88.1 | 0.89.0-rc.0 | -543 Bytes |
| `@react-native/normalize-colors` | 0.88.1 | 0.89.0-rc.0 | +97 Bytes |
| `memoize-one` | 5.2.1 | 6.0.0 | +87 Bytes |
| `@react-native/asset-utils` | 0.88.1 | 0.89.0-rc.0 | 0 Bytes |
| `@react-native/js-polyfills` | 0.88.1 | 0.89.0-rc.0 | 0 Bytes |

</details>

### 📄 Modules

<details>
<summary>🆕 Added modules (10, +4.6 KB)</summary>

| Module | Size |
| --- | ---: |
| `node_modules/react-native/src/unstable-internals-do-not-use.js` | 921 Bytes |
| `node_modules/react-native/Libraries/Utilities/DevLoadingView.js` | 829 Bytes |
| `node_modules/react-native/src/private/components/safeareaview/SafeAreaView_INTERNAL_DO_NOT_USE.js` | 707 Bytes |
| `node_modules/@babel/runtime/helpers/interopRequireWildcard.js` | 472 Bytes |
| `node_modules/react-native/Libraries/AppState/useAppState.js` | 385 Bytes |
| `node_modules/react-native/Libraries/Utilities/NativeDevLoadingView.js` | 363 Bytes |
| `node_modules/react-native/Libraries/NativeModules/specs/NativeRedBox.js` | 363 Bytes |
| `node_modules/react-native/Libraries/Core/polyfillArrayES2023Methods.js` | 360 Bytes |
| `node_modules/react-native/src/private/specs_DEPRECATED/modules/NativeDevLoadingView.js` | 161 Bytes |
| `node_modules/react-native/src/private/specs_DEPRECATED/modules/NativeRedBox.js` | 153 Bytes |

</details>

<details>
<summary>🗑️ Removed modules (31, -8.39 KB)</summary>

| Module | Size |
| --- | ---: |
| `node_modules/@babel/runtime/helpers/wrapNativeSuper.js` | 624 Bytes |
| `node_modules/@babel/runtime/helpers/iterableToArrayLimit.js` | 491 Bytes |
| `node_modules/@babel/runtime/helpers/get.js` | 407 Bytes |
| `node_modules/@babel/runtime/helpers/toPrimitive.js` | 406 Bytes |
| `node_modules/react-native/src/private/components/virtualcollection/dom/getScrollParent.js` | 398 Bytes |
| `node_modules/@babel/runtime/helpers/typeof.js` | 386 Bytes |
| `node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js` | 379 Bytes |
| `node_modules/@babel/runtime/helpers/createClass.js` | 377 Bytes |
| `node_modules/@babel/runtime/helpers/inherits.js` | 377 Bytes |
| `node_modules/@babel/runtime/helpers/objectWithoutProperties.js` | 330 Bytes |
| `node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js` | 299 Bytes |
| `node_modules/@babel/runtime/helpers/getPrototypeOf.js` | 293 Bytes |
| `node_modules/@babel/runtime/helpers/possibleConstructorReturn.js` | 288 Bytes |
| `node_modules/@babel/runtime/helpers/setPrototypeOf.js` | 278 Bytes |
| `node_modules/@babel/runtime/helpers/construct.js` | 268 Bytes |
| `node_modules/@babel/runtime/helpers/nonIterableRest.js` | 265 Bytes |
| `node_modules/react-native/Libraries/Utilities/useRefEffect.js` | 245 Bytes |
| `node_modules/react-native/Libraries/Core/Devtools/openURLInBrowser.js` | 244 Bytes |
| `node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js` | 234 Bytes |
| `node_modules/@babel/runtime/helpers/assertThisInitialized.js` | 215 Bytes |
| `node_modules/@babel/runtime/helpers/isNativeFunction.js` | 208 Bytes |
| `node_modules/react-native/Libraries/EventEmitter/RCTEventEmitter.js` | 204 Bytes |
| `node_modules/@babel/runtime/helpers/arrayLikeToArray.js` | 196 Bytes |
| `node_modules/@babel/runtime/helpers/classCallCheck.js` | 186 Bytes |
| `node_modules/@babel/runtime/helpers/superPropBase.js` | 175 Bytes |
| `node_modules/@babel/runtime/helpers/toPropertyKey.js` | 174 Bytes |
| `node_modules/@babel/runtime/helpers/slicedToArray.js` | 170 Bytes |
| `node_modules/@babel/runtime/helpers/readOnlyError.js` | 150 Bytes |
| `node_modules/react-native/src/private/components/virtualcollection/dom/isScrollableNode.js` | 137 Bytes |
| `node_modules/@babel/runtime/helpers/arrayWithHoles.js` | 135 Bytes |
| `node_modules/react-native/Libraries/ReactPrivate/ReactNativePrivateInterface.js` | 48 Bytes |

</details>

<details>
<summary>🔀 Changed modules (348, net -119.09 KB)</summary>

| Module | Before | After | Δ |
| --- | ---: | ---: | ---: |
| `node_modules/react-native/src/private/webapis/structuredClone/structuredClone.js` | 1.74 KB | 4.04 KB | 📈 +2.3 KB |
| `node_modules/react-native/src/private/webapis/performance/ResourceTiming.js` | 3.32 KB | 1.28 KB | 📉 -2.04 KB |
| `node_modules/@react-native/virtualized-lists/Lists/VirtualizedList.js` | 28.49 KB | 30.42 KB | 📈 +1.93 KB |
| `node_modules/react-native/src/private/featureflags/ReactNativeFeatureFlags.js` | 14.19 KB | 15.9 KB | 📈 +1.71 KB |
| `node_modules/react-native/Libraries/Network/XMLHttpRequest.js` | 11.81 KB | 10.28 KB | 📉 -1.53 KB |
| `node_modules/react-native/src/private/webapis/performance/EventTiming.js` | 2.51 KB | 1.21 KB | 📉 -1.3 KB |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedValue.js` | 4.03 KB | 2.76 KB | 📉 -1.27 KB |
| `node_modules/react-native/src/private/webapis/dom/nodes/ReadOnlyElement.js` | 4.08 KB | 2.82 KB | 📉 -1.26 KB |
| `node_modules/@react-native/virtualized-lists/Lists/VirtualizedSectionList.js` | 6.6 KB | 5.38 KB | 📉 -1.22 KB |
| `node_modules/react-native/Libraries/Lists/FlatList.js` | 6.26 KB | 5.09 KB | 📉 -1.17 KB |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedColor.js` | 4.51 KB | 3.35 KB | 📉 -1.16 KB |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedProps.js` | 5.38 KB | 4.23 KB | 📉 -1.15 KB |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedStyle.js` | 3.24 KB | 2.09 KB | 📉 -1.15 KB |
| `node_modules/react-native/src/private/webapis/geometry/DOMRectReadOnly.js` | 2.24 KB | 1.13 KB | 📉 -1.11 KB |
| `node_modules/react-native/Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.android.js` | 4.03 KB | 2.94 KB | 📉 -1.1 KB |
| `node_modules/react-native/src/private/webapis/dom/nodes/ReadOnlyNode.js` | 4.56 KB | 3.47 KB | 📉 -1.09 KB |
| `node_modules/react-native/Libraries/Components/Touchable/TouchableOpacity.js` | 5.42 KB | 4.35 KB | 📉 -1.06 KB |
| `node_modules/react-native/Libraries/Components/Touchable/TouchableHighlight.js` | 5.81 KB | 4.75 KB | 📉 -1.06 KB |
| `node_modules/react-native/src/private/webapis/dom/nodes/ReactNativeElement.js` | 3.8 KB | 2.75 KB | 📉 -1.05 KB |
| `node_modules/react-native/Libraries/Components/Touchable/TouchableNativeFeedback.js` | 5.65 KB | 4.62 KB | 📉 -1.03 KB |
| `node_modules/react-native/Libraries/Animated/animations/TimingAnimation.js` | 2.93 KB | 1.91 KB | 📉 -1.02 KB |
| `node_modules/react-native/Libraries/Lists/SectionList.js` | 2.15 KB | 1.13 KB | 📉 -1.02 KB |
| `node_modules/react-native/Libraries/Animated/animations/SpringAnimation.js` | 4.99 KB | 4 KB | 📉 -1016 Bytes |
| `node_modules/@react-native/virtualized-lists/Lists/StateSafePureComponent.js` | 1.81 KB | 842 Bytes | 📉 -1013 Bytes |
| `node_modules/react-native/Libraries/Components/Keyboard/KeyboardAvoidingView.js` | 3.92 KB | 2.94 KB | 📉 -1003 Bytes |
| `node_modules/react-native/Libraries/Components/Pressable/Pressable.js` | 3.26 KB | 2.29 KB | 📉 -990 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedNode.js` | 3.67 KB | 2.71 KB | 📉 -974 Bytes |
| `node_modules/react-native/Libraries/Image/ImageBackground.js` | 1.69 KB | 779 Bytes | 📉 -950 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedValueXY.js` | 2.69 KB | 1.77 KB | 📉 -944 Bytes |
| `node_modules/@react-native/virtualized-lists/Lists/VirtualizedListCellRenderer.js` | 3.21 KB | 2.3 KB | 📉 -935 Bytes |
| `node_modules/react-native/Libraries/Components/StatusBar/StatusBar.js` | 3.21 KB | 2.31 KB | 📉 -928 Bytes |
| `node_modules/react-native/Libraries/Components/RefreshControl/RefreshControl.js` | 1.82 KB | 942 Bytes | 📉 -919 Bytes |
| `node_modules/react-native/src/private/webapis/dom/nodes/ReadOnlyText.js` | 1.49 KB | 649 Bytes | 📉 -876 Bytes |
| `node_modules/react-native/Libraries/Modal/Modal.js` | 2.97 KB | 2.13 KB | 📉 -865 Bytes |
| `node_modules/react-native/Libraries/Pressability/Pressability.js` | 9.84 KB | 9.07 KB | 📉 -791 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedInterpolation.js` | 5.06 KB | 4.29 KB | 📉 -788 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedObject.js` | 2.34 KB | 1.58 KB | 📉 -781 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedTransform.js` | 2.41 KB | 1.66 KB | 📉 -767 Bytes |
| `node_modules/react-native/src/private/webapis/performance/LongTasks.js` | 1.55 KB | 823 Bytes | 📉 -762 Bytes |
| `node_modules/react-native/src/private/webapis/errors/DOMException.js` | 2.17 KB | 1.43 KB | 📉 -758 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedWithChildren.js` | 1.86 KB | 1.13 KB | 📉 -748 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedModulo.js` | 1.41 KB | 707 Bytes | 📉 -738 Bytes |
| `node_modules/react-native/Libraries/Blob/FileReader.js` | 4.33 KB | 3.61 KB | 📉 -737 Bytes |
| `node_modules/react-native/Libraries/Components/TextInput/TextInput.js` | 7.13 KB | 6.42 KB | 📉 -731 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedDiffClamp.js` | 1.54 KB | 853 Bytes | 📉 -726 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedAddition.js` | 1.55 KB | 861 Bytes | 📉 -725 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedMultiplication.js` | 1.55 KB | 867 Bytes | 📉 -725 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedSubtraction.js` | 1.55 KB | 864 Bytes | 📉 -725 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedTracking.js` | 1.91 KB | 1.21 KB | 📉 -720 Bytes |
| `node_modules/react-native/Libraries/Animated/nodes/AnimatedDivision.js` | 1.9 KB | 1.2 KB | 📉 -715 Bytes |

_...and 298 more (use `--limit` to show more)._

</details>
