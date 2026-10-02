# React Native Bundle Diffs

> [!TIP]
> Every number and report in this repo was generated with **[react-native-bundle-discovery](https://github.com/retyui/react-native-bundle-discovery)**, simple tooling that helps React Native devs explore bundle size 📦, spot heavy packages, and inspect module/code structure.
>
> - 🔌 **Metro serializer plugin** writes a JSON stats report on every build
> - 🔍 **`compare`** diffs two builds and shows added/removed modules and package version bumps (each report in [`reports/`](./reports) is one `compare` run)
> - 📊 **`packages` / `modules`** list the heaviest dependencies and files, with optimization hints
> - 🖥️ **Interactive UI and static HTML reports** let you drill into any module
> - ⚛️ Works with **Re.Pack** and inside **React Native DevTools** through a Rozenite plugin
>
> Try it on your own app and see what's really in your bundle.

---


JS bundle diff (platforms: `ios`, `android`, debug: `false`):

```mermaid
%%{init: {"themeVariables": {"xyChart": {"plotColorPalette": "#0a84ff, #3ddc84"}}}}%%
xychart-beta
    title "JS bundle size by React Native version (release)"
    x-axis ["0.68", "0.69", "0.70", "0.71", "0.72", "0.73", "0.74", "0.75", "0.76", "0.77", "0.78", "0.79", "0.80", "0.81", "0.82", "0.83", "0.84", "0.85", "0.86", "0.87", "0.88"]
    y-axis "Size (KB)" 700 --> 1020
    line [746.14, 717.64, 725.14, 770.41, 789.21, 825.8, 859.52, 858.97, 876.44, 876.98, 902.28, 956.98, 946.13, 963.67, 969.2, 999.33, 967.67, 972.04, 865.86, 865.32, 871.52]
    line [747.52, 719.48, 726.66, 772.92, 792.91, 830, 865.91, 865.43, 882.63, 884.22, 909.13, 961.87, 950.82, 968.66, 977.4, 1007.72, 975.15, 976.59, 871.03, 870.83, 875.36]
```

🔵 `ios` · 🟢 `android`

| Platform | `0.68.x` | `0.88.x` | Overall Δ | Peak |
| --- | ---: | ---: | ---: | ---: |
| `ios` | 746.14 KB | 871.52 KB | 📈 +125.38 KB (+16.8%) | 999.33 KB (`0.83.x`) |
| `android` | 747.52 KB | 875.36 KB | 📈 +127.84 KB (+17.1%) | 1007.72 KB (`0.83.x`) |

## iOS

- [`0.68.x...0.69.x` 📉 -28.5 KB (-3.82%)](./reports/metro/RN68-RN69-ios.md)
- [`0.69.x...0.70.x` 📈 +7.49 KB (+1.04%)](./reports/metro/RN69-RN70-ios.md)
- [`0.70.x...0.71.x` 📈 +45.27 KB (+6.24%)](./reports/metro/RN70-RN71-ios.md)
- [`0.71.x...0.72.x` 📈 +18.8 KB (+2.44%)](./reports/metro/RN71-RN72-ios.md)
- [`0.72.x...0.73.x` 📈 +36.59 KB (+4.64%)](./reports/metro/RN72-RN73-ios.md)
- [`0.73.x...0.74.x` 📈 +33.72 KB (+4.08%)](./reports/metro/RN73-RN74-ios.md)
- [`0.74.x...0.75.x` 📉 -559 Bytes (-0.06%)](./reports/metro/RN74-RN75-ios.md)
- [`0.75.x...0.76.x` 📈 +17.47 KB (+2.03%)](./reports/metro/RN75-RN76-ios.md)
- [`0.76.x...0.77.x` 📈 +553 Bytes (+0.06%)](./reports/metro/RN76-RN77-ios.md)
- [`0.77.x...0.78.x` 📈 +25.29 KB (+2.88%)](./reports/metro/RN77-RN78-ios.md)
- [`0.78.x...0.79.x` 📈 +54.71 KB (+6.06%)](./reports/metro/RN78-RN79-ios.md)
- [`0.79.x...0.80.x` 📉 -10.85 KB (-1.13%)](./reports/metro/RN79-RN80-ios.md)
- [`0.80.x...0.81.x` 📈 +17.53 KB (+1.85%)](./reports/metro/RN80-RN81-ios.md)
- [`0.81.x...0.82.x` 📈 +5.54 KB (+0.57%)](./reports/metro/RN81-RN82-ios.md)
- [`0.82.x...0.83.x` 📈 +30.13 KB (+3.11%)](./reports/metro/RN82-RN83-ios.md)
- [`0.83.x...0.84.x` 📉 -31.66 KB (-3.17%)](./reports/metro/RN83-RN84-ios.md)
- [`0.84.x...0.85.x` 📈 +4.37 KB (+0.45%)](./reports/metro/RN84-RN85-ios.md)
- [`0.85.x...0.86.x` 📉 -106.18 KB (-10.92%)](./reports/metro/RN85-RN86-ios.md)
- [`0.86.x...0.87.x` 📉 -552 Bytes (-0.06%)](./reports/metro/RN86-RN87-ios.md)
- [`0.87.x...0.88.x` 📈 +6.2 KB (+0.72%)](./reports/metro/RN87-RN88-ios.md)

## Android

- [`0.68.x...0.69.x` 📉 -28.03 KB (-3.75%)](./reports/metro/RN68-RN69-android.md)
- [`0.69.x...0.70.x` 📈 +7.17 KB (+1%)](./reports/metro/RN69-RN70-android.md)
- [`0.70.x...0.71.x` 📈 +46.26 KB (+6.37%)](./reports/metro/RN70-RN71-android.md)
- [`0.71.x...0.72.x` 📈 +19.99 KB (+2.59%)](./reports/metro/RN71-RN72-android.md)
- [`0.72.x...0.73.x` 📈 +37.09 KB (+4.68%)](./reports/metro/RN72-RN73-android.md)
- [`0.73.x...0.74.x` 📈 +35.91 KB (+4.33%)](./reports/metro/RN73-RN74-android.md)
- [`0.74.x...0.75.x` 📉 -495 Bytes (-0.06%)](./reports/metro/RN74-RN75-android.md)
- [`0.75.x...0.76.x` 📈 +17.21 KB (+1.99%)](./reports/metro/RN75-RN76-android.md)
- [`0.76.x...0.77.x` 📈 +1.58 KB (+0.18%)](./reports/metro/RN76-RN77-android.md)
- [`0.77.x...0.78.x` 📈 +24.92 KB (+2.82%)](./reports/metro/RN77-RN78-android.md)
- [`0.78.x...0.79.x` 📈 +52.74 KB (+5.8%)](./reports/metro/RN78-RN79-android.md)
- [`0.79.x...0.80.x` 📉 -11.05 KB (-1.15%)](./reports/metro/RN79-RN80-android.md)
- [`0.80.x...0.81.x` 📈 +17.84 KB (+1.88%)](./reports/metro/RN80-RN81-android.md)
- [`0.81.x...0.82.x` 📈 +8.74 KB (+0.9%)](./reports/metro/RN81-RN82-android.md)
- [`0.82.x...0.83.x` 📈 +30.32 KB (+3.1%)](./reports/metro/RN82-RN83-android.md)
- [`0.83.x...0.84.x` 📉 -32.57 KB (-3.23%)](./reports/metro/RN83-RN84-android.md)
- [`0.84.x...0.85.x` 📈 +1.44 KB (+0.15%)](./reports/metro/RN84-RN85-android.md)
- [`0.85.x...0.86.x` 📉 -105.56 KB (-10.81%)](./reports/metro/RN85-RN86-android.md)
- [`0.86.x...0.87.x` 📉 -204 Bytes (-0.02%)](./reports/metro/RN86-RN87-android.md)
- [`0.87.x...0.88.x` 📈 +4.53 KB (+0.52%)](./reports/metro/RN87-RN88-android.md)
