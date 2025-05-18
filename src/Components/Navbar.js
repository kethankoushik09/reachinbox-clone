import React from 'react';
import { Navbar as BsNavbar, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BsNavbar bg="dark" variant="dark">
      <Container>
        <BsNavbar.Brand href="/" className="fw-bold fs-4">
          REACHINBOX
        </BsNavbar.Brand>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
