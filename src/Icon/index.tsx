import * as React from "react";
import * as PropTypes from "prop-types";

import ElementState from "../ElementState";

import iconsType from "./icons";
const icons: {
  [key: string]: string;
} = iconsType;

export interface DataProps {
  /**
   * Set custom Icon size.
   */
  size?: number;
  /**
   * The Icon `onMouseEnter` will applied to `rootElm.style`.
   */
  hoverStyle?: React.CSSProperties;
  /**
   * `ReactNode`, Paste unicode or string or `IconName`.
   */
  children?: React.ReactNode;
  /**
   * if `true`, default `span` element will changed to `svg text` element.
   */
  useSVGElement?: boolean;
}
export interface IconProps extends DataProps, React.HTMLAttributes<HTMLSpanElement> {}
export interface IconState {
 hovered?: boolean;
}

const emptyFunc = () => {};
export class Icon extends React.Component<IconProps, IconState> {
  static defaultProps: IconProps = {
    useSVGElement: false,
    onMouseEnter: emptyFunc,
    onMouseLeave: emptyFunc
  };

  state: IconState = {
    hovered: false
  };

  context: { theme: ReactUWP.ThemeType };
  static contextTypes = { theme: PropTypes.object };

  handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    this.props.onMouseEnter(e);
    this.setState({
      hovered: true
    });
  }

  handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    this.props.onMouseLeave(e);
    this.setState({
      hovered: false
    });
  }

  render() {
    const {
      size,
      style,
      hoverStyle,
      children,
      useSVGElement,
      ...attributes
    } = this.props;
    const { theme } = this.context;
    const { hovered } = this.state;
    return React.createElement(useSVGElement ? "text" as "span" : "span", {
      ...attributes,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      style: theme.prefixStyle({
        display: "inline-block",
        textAlign: "center",
        verticalAlign: "middle",
        fontFamily: theme.fonts.segoeMDL2Assets,
        transition: "all .25s",
        border: "none",
        outline: "none",
        userSelect: "none",
        width: size,
        height: size,
        lineHeight: size ? `${size}px` : "inherit",
        fontSize: size || "inherit",
        cursor: "inherit",
        color: "inherit",
        ...style,
        ...(hovered ? hoverStyle : void 0)
      })
    }, icons[children as any] || children);
  }
}

export { icons };

export default Icon;
