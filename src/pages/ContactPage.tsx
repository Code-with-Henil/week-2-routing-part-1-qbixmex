import { Container, Typography } from "@mui/material";

const ContactPage = () => {
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
          Contact Page
        </Typography>
        <Typography
          textAlign="center"
          fontSize="2rem"
          color="warning.main"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo beatae id, hic minus expedita accusantium adipisci recusandae accusamus praesentium, repellat minima repudiandae, voluptas a fugiat ullam veniam labore vero! Magnam.
        </Typography>
      </main>
    </Container>
  );
};

export default ContactPage;
