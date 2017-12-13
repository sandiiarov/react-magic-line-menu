// @flow

import React, { Component, Children, cloneElement } from 'react';
import type { ElementRef } from 'react';
import animate from 'animateplus';

type Easing =
  | 'linear'
  | 'in-cubic'
  | 'out-cubic'
  | 'in-out-cubic'
  | 'in-quartic'
  | 'out-quartic'
  | 'in-out-quartic'
  | 'in-quintic'
  | 'out-quintic'
  | 'in-out-quintic'
  | 'in-exponential'
  | 'out-exponential'
  | 'in-out-exponential'
  | 'in-circular'
  | 'out-circular'
  | 'in-out-circular'
  | 'in-elastic'
  | 'out-elastic'
  | 'in-out-elastic';

type Props = {
  children: React$Node,
  active: number,
  onItemClick: Function,
  menuStyle?: Object,
  lineStyle?: Object,
  menuClassName?: string,
  lineClassName?: string,
  lineHeight?: number,
  lineColor?: string,
  duration?: number,
  easing?: Easing,
};

type Value = {|
  left: number,
  right: number,
  width: number,
|};

class MagicLineMenu extends Component<Props> {
  menuNode: ElementRef<'div'>;
  lineNode: ElementRef<'div'>;

  static defaultProps = {
    active: 0,
  };

  componentDidMount() {
    this.setMenuValues();

    this.setItemValues();

    this.setLineStyle();
  }

  componentWillReceiveProps(nextProps: Props) {
    const { left, right, width } = this.menuValues;

    const {
      left: prevLeft,
      right: prevRight,
      width: prevWidth,
    } = this.itemValues[this.props.active];

    const {
      left: nextLeft,
      right: nextRight,
      width: nextWidth,
    } = this.itemValues[nextProps.active];

    const defaultScaleX = prevWidth / width;

    const endScaleX = nextWidth / width;

    if (nextProps.active > this.props.active) {
      const defaultTranslateX = prevLeft - left;

      const startScaleX = (nextRight - prevLeft - nextWidth / 2) / width;

      const endTranslateX = nextLeft - left;

      this.lineNode.style.transformOrigin = '0% 50% 0';

      this.animateLine(
        defaultTranslateX,
        defaultScaleX,
        startScaleX,
        endTranslateX,
        endScaleX
      );
    }

    if (nextProps.active < this.props.active) {
      const defaultTranslateX = prevRight - right;

      const startScaleX = (prevRight - nextLeft - nextWidth / 2) / width;

      const endTranslateX = nextRight - right;

      this.lineNode.style.transformOrigin = '100% 50% 0';

      this.animateLine(
        defaultTranslateX,
        defaultScaleX,
        startScaleX,
        endTranslateX,
        endScaleX
      );
    }
  }

  setMenuValues = () => {
    const { left, right, width } = this.menuNode.getBoundingClientRect();

    this.menuValues = { left, right, width };
  };

  setItemValues = () => {
    this.itemValues = Array.from(this.menuNode.childNodes)
      .slice(1)
      .map(child => {
        // $FlowIgnore
        const { left, right, width } = child.getBoundingClientRect();

        return { left, right, width };
      });
  };

  setLineStyle = () => {
    const { left, width } = this.menuValues;

    const { left: l, width: w } = this.itemValues[this.props.active];

    this.lineNode.style.transform = `translateX(${l - left}px) scaleX(${w /
      width})`;

    this.forceUpdate();
  };

  animateLine = (
    defaultTranslateX: number,
    defaultScaleX: number,
    startScaleX: number,
    endTranslateX: number,
    endScaleX: number
  ) => {
    animate({
      elements: this.lineNode,
      duration: (this.props.duration || 500) / 2,
      easing: this.props.easing || 'linear',
      transform: [
        `translateX(${defaultTranslateX}px) scaleX(${defaultScaleX})`,
        `translateX(${defaultTranslateX}px) scaleX(${startScaleX})`,
      ],
    }).then(options =>
      animate({
        ...options,
        transform: [
          `translateX(${defaultTranslateX}px) scaleX(${startScaleX})`,
          `translateX(${endTranslateX}px) scaleX(${endScaleX})`,
        ],
      })
    );
  };

  menuValues: Value = { left: 0, right: 0, width: 0 };

  itemValues: Value[] = [];

  render() {
    const {
      children,
      onItemClick,
      menuStyle,
      lineStyle,
      menuClassName,
      lineClassName,
      lineHeight,
      lineColor,
    } = this.props;

    return (
      <div
        ref={node => {
          if (node) this.menuNode = node;
        }}
        style={{
          display: 'flex',
          position: 'relative',
          ...menuStyle,
        }}
        className={menuClassName}
      >
        <div
          ref={node => {
            if (node) this.lineNode = node;
          }}
          style={{
            position: 'absolute',
            height: 0,
            bottom: 0,
            left: 0,
            right: 0,
            transformOrigin: '0% 50% 0',
            borderBottom: `${lineHeight || 1}px solid ${lineColor || 'black'}`,
            ...lineStyle,
          }}
          className={lineClassName}
        />
        {Children.map(children, (child, index) =>
          cloneElement(child, { onClick: () => onItemClick(index) })
        )}
      </div>
    );
  }
}

export default MagicLineMenu;
