import { css } from 'styled-components';

export function linkColor(color: string) {
  return css`
    &, &:link, &:visited, &:active, &:hover {
      color: ${color};
    }
  `;
}

export function spaceChildren(horizontal: string, vertical = '0px') {
  if (!horizontal) {
    horizontal = '0';
  }
  return css`
    > * {
      + * {
        margin: ${vertical} ${horizontal}
      }
    }
  `;
}
export function clearfix() {
  return css`
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  `;
}