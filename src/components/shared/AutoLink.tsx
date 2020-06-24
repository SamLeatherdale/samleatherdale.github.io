import { Link } from 'gatsby';
import * as React from 'react';
import isAbsoluteUrl from 'is-absolute-url';
import styled, { css } from 'styled-components';
import { linkColor } from '../../styles/mixins';

export type PropsType = {
  [key: string]: unknown;
  href: string;
  newTab?: boolean;
  inherit?: boolean;
}

export default function AutoLink({ href, newTab, ...rest }: PropsType) {
  if (newTab) {
    rest = {
      target: '_blank',
      rel: 'noopener',
      ...rest
    };
  }
  return !isAbsoluteUrl(href)
    ? <LinkStyle to={href} {...rest} />
    : <AnchorStyle href={href} {...rest} />;
}


type LinkStyleProps = {
  inherit?: boolean;
}
const SharedStyle = css<LinkStyleProps>`
  ${(p: LinkStyleProps) => p.inherit && linkColor('inherit')};
`;
const AnchorStyle = styled.a`
  ${SharedStyle}
`;
const LinkStyle = styled(Link)`
  ${SharedStyle}
`;