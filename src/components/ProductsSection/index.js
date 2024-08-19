import React, { useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import {
  ProductSelectionContainer,
  PageTitle,
  CategoryList,
  CategoryItem,
  CategoryName,
  ProductList,
  ProductItem,
  ProductImage,
  ProductName,
  ProductPrice, 
  ProductButtons,
  PrevButton,
  NextButton,
} from "./ProductsElements";

const ProductSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState("petSafe");
  const [selectedProduct, setSelectedProduct] = useState(0);

  const categories = [
    {
      id: "petSafe",
      title: "Pet Safe",
      products: [
        {
          name: "Happy bean",
          image: "petsafe1.png",
          price: 75.25, 
        },
        {
          name: "Ficus microcarpa",
          image: "petsafe2.png",
          price: 100.99, 
        },
        {
          name: "Pothos",
          image: "petsafe3.png",
          price: 55.99, 
        },
      ],
    },

    {
      id: "indoor",
      title: "Indoor",
      products: [
        {
          name: "Pin Stripe Calathea",
          image: "indoor1.png",
          price: 85.95, 
        },
        {
          name: "Prayer plant",
          image: "indoor2.png",
          price: 105.55, 
        },
        {
          name: "Arrowroot plant",
          image: "indoor3.png",
          price: 65.55, 
        },
      ],
    },
    {
      id: "outdoor",
      title: "Outdoor",
      products: [
        {
          name: "Agave",
          image: "outdoor1.png",
          price: 85.65, 
        },
        {
          name: "Cactus Spurge",
          image: "outdoor2.png",
          price: 150.55, 
        },
        {
          name: "Raindrop peperomia",
          image: "outdoor3.png",
          price: 87.95, 
        },
      ],
    },
  ];

  const selectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedProduct(0);
  };

  const selectProduct = (index) => {
    setSelectedProduct(index);
  };

  const nextProduct = () => {
    if (
      selectedProduct <
      categories.find((cat) => cat.id === selectedCategory).products.length - 1
    ) {
      setSelectedProduct(selectedProduct + 1);
    }
  };

  const prevProduct = () => {
    if (selectedProduct > 0) {
      setSelectedProduct(selectedProduct - 1);
    }
  };

  return (
    <ProductSelectionContainer id='products'>
      <PageTitle>Plants Suitable for You</PageTitle>
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            onClick={() => selectCategory(category.id)}
            selected={selectedCategory === category.id}
          >
            <CategoryName>{category.title}</CategoryName>
          </CategoryItem>
        ))}
      </CategoryList>
      <ProductList>
        {categories
          .find((cat) => cat.id === selectedCategory)
          .products.map((product, index) => (
            <ProductItem
              key={index}
              onClick={() => selectProduct(index)}
              selected={selectedProduct === index}
            >
              <ProductImage
                src={`${process.env.PUBLIC_URL}/${product.image}`}
                alt={product.name}
                selected={selectedProduct === index}
              />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>MYR {product.price}</ProductPrice>
            </ProductItem>
          ))}
      </ProductList>
      <ProductButtons>
        <PrevButton onClick={prevProduct}>
          <BsArrowLeftCircleFill />
        </PrevButton>
        <NextButton onClick={nextProduct}>
          <BsArrowRightCircleFill />
        </NextButton>
      </ProductButtons>
    </ProductSelectionContainer>
  );
};

export default ProductSelection;
