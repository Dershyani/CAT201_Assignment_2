import styled, { css } from "styled-components";

export const ProductSelectionContainer = styled.div`
  height: 700px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  padding: 20px;
  margin-top: 120px; /* Adjust this value to move the content down */
  @media (max-width: 768px) {
    height: 1250px;
    margin-top: 30px; /* Adjust for smaller screens */
  }
  @media (max-width: 900px) {
    height: 1250px;
    margin-top: 30px; /* Adjust for smaller screens */
  }
`;

export const PageTitle = styled.h1`
  font-size: 3em;
  font-weight: bold;
  color: #333;
  font-family: "Your font family here", sans-serif;
  margin-bottom: 20px;
  color: #22221f;
  @media (max-width: 768px) {
    font-size: 2em; // Adjust for smaller screens
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center; /* Center-align the content horizontally */
  text-align: center; /* Center-align the text within each item */
`;

export const CategoryItem = styled.div`
  display: inline-block;
  margin: 0 10px;
  padding: 5px 10px;
  background-color: ${(props) => (props.selected ? "#BFD8C9" : "transparent")};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bfd8c9;
  }
`;

export const CategoryName = styled.span`
  font-size: 1em;
  color: #444440;
  font-weight: normal;
  font-family: "Poppins", sans-serif;
`;

export const ProductList = styled.div`
  display: flex; // Display the products in a horizontal row
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const ProductItem = styled.div`
  width: 250px; // Set a fixed width for each item
  margin: 10px; // Ensure consistent margin around the items
  cursor: pointer;
  display: flex; // Use flexbox for alignment
  flex-direction: column; // Stack elements vertically
  align-items: center; // Center-align the items horizontally
  justify-content: start; // Align items to the start of the flex container vertically
  transition: opacity 0.3s ease-in-out;

  // You can add a fixed height to ensure all items are the same height
  height: 350px; // Adjust the height as needed to accommodate the tallest item

  ${(props) =>
    !props.selected &&
    css`
      opacity: 0.7; // Non-selected items are less opaque
    `}

  ${(props) =>
    props.selected &&
    css`
      opacity: 1; // Selected item is fully opaque
    `}
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  opacity: ${(props) => (props.selected ? 1 : 0.7)}; /* Initial opacity */
  transform: scale(
    ${(props) => (props.selected ? 1 : 0.9)}
  ); /* Initial scale */
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; /* Add transitions */
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: "Arial", sans-serif; // Use a common font that matches the image
`;

export const ProductPrice = styled.p`
  font-size: 16px; // Adjust font size as needed
  color: #333; // Darker text for the price
`;

export const ProductButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: relative; /* Make the buttons relative to this container */
`;

export const ButtonBase = styled.button`
  background-color: transparent; // Remove any background color
  border: none; // Remove the border
  width: 100px; // Set the width as per your design
  height: 50px; // Set the height as per your design
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  color: #3bab5a; // Set the text color to #3BAB5A
  font-size: 40px; // Adjust the font size to change the size of the icon
  position: relative; // Make the button and icon relative to their current position
  top: -250px; // Adjust this value to move the button and icon upward
`;

export const PrevButton = styled(ButtonBase)`
  position: absolute;
  left: 0;

  @media (max-width: 768px) {
    display: none; // Hide the button on smaller screens
  }
  @media (max-width: 900px) {
    display: none; // Hide the button on smaller screens
  }
`;

export const NextButton = styled(ButtonBase)`
  position: absolute;
  right: 0;

  @media (max-width: 768px) {
    display: none; // Hide the button on smaller screens
  }
  @media (max-width: 900px) {
    display: none; // Hide the button on smaller screens
  }
`;
