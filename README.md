# 🧙‍ React Magic Line Menu

[![NPM version](https://img.shields.io/npm/v/react-magic-line-menu.svg?style=flat-square)](https://npmjs.com/package/react-magic-line-menu) [![NPM downloads](https://img.shields.io/npm/dm/react-magic-line-menu.svg?style=flat-square)](https://npmjs.com/package/react-magic-line-menu) [![Build Status](https://travis-ci.org/sandiiarov/react-magic-line-menu.svg?branch=feature%2Finit)](https://travis-ci.org/sandiiarov/react-magic-line-menu)

<p align="center">
  <img src="./media/preview.gif" alt="preview" width="700">
</p>

## Browser support

| Chrome | Safari | IE / Edge | Firefox | Opera |
| ------ | ------ | --------- | ------- | ----- |
| 24+    | 6+     | 10+       | 32+     | 15+   |

## Getting started

`npm i -S react-magic-line-menu`

or

`yarn add react-magic-line-menu`

```javascript
import MagicLineMenu from 'react-magic-line-menu';

<MagicLineMenu active={0} onItemClick={index => console.log(index)}>
  <div>Home</div>
  <div>Contacts</div>
</MagicLineMenu>
```

## Props

### active

| Default | Type   |
| :------ | :----- |
| `0`     | number |

The index of active item.

### onItemClick

| Default | Type                    |
| :------ | :---------------------- |
|         | Function(index: number) |

Called when click a menu item.

menuStyle?: Object,
lineStyle?: Object,
menuClassName?: string,
lineClassName?: string,

### menuStyle?

| Default | Type   |
| :------ | :----- |
|         | Object |

Override the inline-styles of the root element.

### lineStyle?

| Default | Type   |
| :------ | :----- |
|         | Object |

Override the inline-styles of the line element.

### menuClassName?

| Default | Type   |
| :------ | :----- |
|         | string |

CSS className of the root element.

### lineStyle?

| Default | Type   |
| :------ | :----- |
|         | string |

CSS className of the line element.

### lineHeight?

| Default | Type   |
| :------ | :----- |
| `1`     | number |

Height of line in px.

### lineColor?

| Default | Type   |
| :------ | :----- |
| `black` | string |

Color of line.

### duration?

| Default | Type   |
| :------ | :----- |
| `500`   | number |

Determines the duration of the animation in milliseconds.

### easing?

| Default  | Type   |
| :------- | :----- |
| `linear` | string |

Penner's equations:

| easeIn        | easeOut        | easeInOut        |
| ------------- | -------------- | ---------------- |
| easeInQuad    | easeOutQuad    | easeInOutQuad    |
| easeInCubic   | easeOutCubic   | easeInOutCubic   |
| easeInQuart   | easeOutQuart   | easeInOutQuart   |
| easeInQuint   | easeOutQuint   | easeInOutQuint   |
| easeInSine    | easeOutSine    | easeInOutSine    |
| easeInExpo    | easeOutExpo    | easeInOutExpo    |
| easeInCirc    | easeOutCirc    | easeInOutCirc    |
| easeInBack    | easeOutBack    | easeInOutBack    |
| easeInElastic | easeOutElastic | easeInOutElastic |

```javascript
<MagicLineMenu
  active={0}
  onItemClick={index => console.log(index)}
  easing="easeInQuad"
>
  <div>Home</div>
  <div>Contacts</div>
</MagicLineMenu>
```
