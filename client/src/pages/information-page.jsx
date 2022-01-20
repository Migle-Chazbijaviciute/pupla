import {
  Box, Typography, useTheme, styled,
} from '@mui/material';
import React from 'react';

const InformationPage = () => {
  const theme = useTheme();

  const StyledHeader = styled(Typography)({
    color: theme.palette.secondary.dark,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '2em',
    textDecoration: 'none',
    marginBottom: 20,
    marginTop: 20,
  });

  const StyledIntro = styled(Typography)({
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    fontSize: '1.05rem',
    marginBottom: 20,
  });

  const StyledQuestions = styled(Typography)({
    color: theme.palette.secondary.dark,
    fontSize: '1rem',
    marginBottom: 7,
  });

  const StyledAnswers = styled(Typography)({
    color: theme.palette.primary.dark,
    fontSize: '1 rem',
    marginBottom: 40,
  });

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <Box maxWidth="80%">
        <StyledHeader>information</StyledHeader>
        <StyledIntro>
          For all questions, we always recommend to contact PÙPLA by email pupla.sho@gmail.com .
          ALL CLOTHES ARE MADE IN LITHUANIA, INDIVIDUALY AFTER YOUR ORDER IS PLACED.
        </StyledIntro>

        <StyledIntro>Frequently asked questions:</StyledIntro>

        <StyledQuestions>
          1. If I like the garment but want to adjust certain dimensions is it possible?
        </StyledQuestions>
        <StyledAnswers>
          - Of course! You usually do not have to pay extra for adjusting.
        </StyledAnswers>

        <StyledQuestions>
          2. How do you deliver orders in Lithuania?
        </StyledQuestions>
        <StyledAnswers>
          - We deliver by post machines called &ldquo;OMNIVA&rdquo;.
        </StyledAnswers>

        <StyledQuestions>
          3. Are you sending abroad?
        </StyledQuestions>
        <StyledAnswers>
          - Yes, we are sending worldwide by registered mail. Goodies usually travels
          about 2-4 weeks from dispatch.
        </StyledAnswers>

        <StyledQuestions>
          4. Do you have products in stores or in a location where I could try them on?
        </StyledQuestions>
        <StyledAnswers>
          - No, right now we are only available on the internet.
          Everything that you might order, will be made and delivered to you within two weeks.
          If you have any questions or need help ordering contact us through email.
        </StyledAnswers>

        <StyledQuestions>
          5. Is it possible to make return?
        </StyledQuestions>
        <StyledAnswers>
          - Of course. If the label is not torn and the garment has not been modified specifically
          according to the customer&apos;s requests or damaged.
          Return shipping is paid by the buyer.
        </StyledAnswers>
      </Box>
    </Box>
  );
};

export default InformationPage;
