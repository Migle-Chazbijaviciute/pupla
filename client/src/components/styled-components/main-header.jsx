import React from 'react';
import { Typography, styled } from '@mui/material';
import { useTheme } from '@emotion/react';

const StyledHeader = ({ children, ...sx }) => {
  const theme = useTheme();

  const StyledH = styled(Typography)({
    color: theme.palette.secondary.dark,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '2em',
    textDecoration: 'none',
    marginBottom: 20,
    marginTop: 20,
    ...sx,
  });

  return (
    <StyledH {...sx}>
      {children}
    </StyledH>
  );
};

export default StyledHeader;
