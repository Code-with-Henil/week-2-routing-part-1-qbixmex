import { Container, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container>
      <main>
        <Typography
          variant="h1"
          component="h1"
          textAlign="center"
          marginY={3}
          color="primary"
        >
          Page Not Found
        </Typography>
      </main>
    </Container>
  );
};

export default NotFoundPage;
