import React from 'react';
import { Grid, GridProps, styled } from '@mui/material';

type StyledGridContainerProps = GridProps;

const StyledContainer = styled(Grid)(({ theme }) => ({
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
}));

const StyledGridContainer: React.FC<StyledGridContainerProps> = ({ children, ...props }) => (
  <StyledContainer {...props}>
    {children}
  </StyledContainer>
);

export default StyledGridContainer;
