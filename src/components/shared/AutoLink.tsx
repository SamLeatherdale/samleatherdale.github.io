import { Link } from 'gatsby';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import isAbsoluteUrl from 'is-absolute-url';
import styled, { css } from 'styled-components';
import { linkColor } from '../../styles/mixins';

export type PropsType = {
  className?: string;
  children?: ReactNode;
  href: string;
  newTab?: boolean;
  inherit?: boolean;
}

export default function AutoLink({ className, children, href, newTab, inherit }: PropsType) {
  let linkProps: LinkStyleProps = { className, children, inherit };
  if (newTab) {
    linkProps = {
      target: '_blank',
      rel: 'noopener',
      ...linkProps
    };
  }

  const internal = !isAbsoluteUrl(href);
  if (internal && !href.startsWith('/')) {
    href = `/${href}`;
  }

  return (internal
    ? <LinkStyle to={href} {...linkProps} />
    : <AnchorStyle href={href} {...linkProps} />
  );
}


type LinkStyleProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  inherit?: boolean;
}
const SharedStyle = css<LinkStyleProps>`
  ${(p: LinkStyleProps) => p.inherit && linkColor('inherit')};
`;
const AnchorStyle = styled(({ inherit, ...rest }) => <a {...rest} />)`
  ${SharedStyle}
`;
const LinkStyle = styled(({ inherit, ...rest }) => <Link {...rest} />)`
  ${SharedStyle}
`;