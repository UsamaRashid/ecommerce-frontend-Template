import React from "react";
import { Grid, GridItem, IconButton } from "@chakra-ui/react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar4 = () => {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      <GridItem w='100%'>
        <IconButton>
          <h1>EN</h1>
        </IconButton>
      </GridItem>
      <GridItem w='100%'>
        <h1>Search Bar</h1>
      </GridItem>
      <GridItem w='100%'>
        <h1>REGISTER</h1>
      </GridItem>
      <GridItem w='100%'>
        <h1>SignUp</h1>
      </GridItem>
      <GridItem w='100%'>
        <div>
          <HiOutlineShoppingCart></HiOutlineShoppingCart>
        </div>
      </GridItem>
    </Grid>
    // <div className='flex '>

    // </div>
  );
};

export default Navbar4;
