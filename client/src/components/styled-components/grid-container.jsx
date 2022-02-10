import React from 'react';
import {
  Grid, useTheme, styled,
} from '@mui/material';

const StyledGridContainer = ({ children, ...props }) => {
  const theme = useTheme();

  const StyledContainer = styled(Grid)({
    backgroundColor: theme.palette.secondary.main,
    alignItems: 'center',
    '.MuiGrid-root.MuiGrid-item': {
      paddingTop: 0,
      paddingLeft: 0,
      padding: 8,
    },
    [theme.breakpoints.up('xs')]: {
      paddingInline: 30,
      marginBottom: 10,
      paddingBlock: 10,
    },
    [theme.breakpoints.up('md')]: {
      paddingBlock: 10,
      marginBottom: 25,
    },
  });

  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  );
};

export default StyledGridContainer;
