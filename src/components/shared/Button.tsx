import React, { ButtonHTMLAttributes } from 'react';
import styled  from 'styled-components';
import { linkColor, spaceX } from '../../styles/mixins';
import { StyleProps } from '../../styles/theme';
import AutoLink from './AutoLink';

type PropsType = {
  fullWidth?: boolean;
  outline?: boolean;
  color?: string;
  newTab?: boolean;
  href?: string;
  rel?: string;
}

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement> & PropsType) {
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
  ${spaceX('6px')};
`;

const StyledLink = styled(AutoLink)`
  text-decoration: none;
`;
type ButtonProps = StyleProps & {
  fullWidth?: boolean;
};
const CommonStyles = styled.button`
  border-radius: 3px;
  font-size: 1rem;
  padding: 0.35rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  transition: 0.3s;
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;
  width: ${(p: ButtonProps) => p.fullWidth && '100%'};
  
  &:hover,
  &:focus,
  &:active {
    background-color: ${(p: ButtonProps) => p.theme.colors.primary};
    border-color: ${(p: ButtonProps) => p.theme.colors.primary};
    ${linkColor('white')};
  }
`;
const FilledStyle = styled(CommonStyles)`
  border-color: ${(p: ButtonProps) => p.theme.colors.primary};
  background-color: ${(p: ButtonProps) => p.theme.colors.primary};
  color: white;
`;
const OutlineStyle = styled(CommonStyles)`
  border-color: ${(p: ButtonProps) => p.theme.colors.primary};
  background-color: transparent;
  color: ${(p: ButtonProps) => p.theme.colors.primary};
`;