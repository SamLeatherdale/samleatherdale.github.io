import React, { ButtonHTMLAttributes } from 'react';
import styled  from 'styled-components';
import { linkColor, spaceChildren } from '../../styles/mixins';
import { StyleProps } from '../../styles/theme';
import AutoLink from './AutoLink';

type ButtonProps = {
  outline?: boolean;
  color?: string;
  newTab?: boolean;
  href?: string;
  rel?: string;
}

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) {
  const {
    type = 'button',
    outline = false,
    href,
    rel,
    newTab,
    ...rest
  } = props;

  let Component = FilledStyle;
  if (outline) {
    Component = OutlineStyle;
  }

  const button = <Component type={type} {...rest} />;

  if (href) {
    return <StyledLink href={href} rel={rel} newTab={newTab}>{button}</StyledLink>;
  }

  return button;
}

export const IconButton = styled(Button)`
  ${spaceChildren('4px')};
`;

const StyledLink = styled(AutoLink)`
  text-decoration: none;
`;
const CommonStyles = styled.button`
  border-radius: 3px;
  font-size: 1rem;
  padding: 0.35rem 0.75rem;
  display: flex;
  align-items: center;
  font-weight: 400;
  transition: 0.3s;
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;
  
  &:hover,
  &:focus,
  &:active {
    background-color: ${(p: StyleProps) => p.theme.colors.primary};
    border-color: ${(p: StyleProps) => p.theme.colors.primary};
    ${linkColor('white')};
  }
`;
const FilledStyle = styled(CommonStyles)`
  border-color: ${(p: StyleProps) => p.theme.colors.primary};
  background-color: ${(p: StyleProps) => p.theme.colors.primary};
  color: white;
`;
const OutlineStyle = styled(CommonStyles)`
  border-color: ${(p: StyleProps) => p.theme.colors.primary};
  background-color: transparent;
  color: ${(p: StyleProps) => p.theme.colors.primary};
`;