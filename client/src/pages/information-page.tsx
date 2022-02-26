import {
  Box, Typography, styled,
} from '@mui/material';
import React from 'react';
import StyledHeader from '../components/styled-components/main-header';
import StyledInfo from '../components/styled-components/styled-info';

const StyledQuestions = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: '1rem',
  marginBottom: 7,
}));

const StyledAnswers = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: '1 rem',
  marginBottom: 40,
}));

const InformationPage = () => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
  }}
  >
    <Box maxWidth="80%">
      <StyledHeader>information</StyledHeader>
      <StyledInfo sx={{ mb: 20 }}>
        For all questions, we always recommend to contact PÙPLA by email pupla.sho@gmail.com .
        ALL CLOTHES ARE MADE IN LITHUANIA, INDIVIDUALY AFTER YOUR ORDER IS PLACED.
      </StyledInfo>

      <StyledInfo sx={{ mb: 20 }}>Frequently asked questions:</StyledInfo>

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

export default InformationPage;
