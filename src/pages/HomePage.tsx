import { Container, Typography } from "@mui/material";

const HomePage = () => {
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
          Home Page
        </Typography>
        <Typography
          textAlign="center"
          fontSize="2rem"
          color="warning.main"
        >
          Welcome to Bakery store,<br />
          were you can find the most delicious deserts<br />
          for your special moments.
        </Typography>
      </main>
    </Container>
  );
};

export default HomePage;
