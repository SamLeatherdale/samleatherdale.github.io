import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StyleProps } from '../../styles/theme';

type PropsType = {
  title?: string;
  children?: ReactNode;
  primary?: boolean;
  danger?: boolean;
}

export default function Badge({ primary, danger, ...rest }: PropsType) {
  let Component = BadgePrimary;
  if (danger) {
    Component = BadgeDanger;
  }

  return <Component {...rest} />;
}

const BadgeStyled = styled.span`
  color: white;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
  padding: 2px 6px;
  text-transform: uppercase;
  white-space: nowrap;
`;
const BadgePrimary = styled(BadgeStyled)`
  background-color: ${(p: StyleProps) => p.theme.colors.blue};
`;
const BadgeDanger = styled(BadgeStyled)`
  background-color: ${(p: StyleProps) => p.theme.colors.red};
`;