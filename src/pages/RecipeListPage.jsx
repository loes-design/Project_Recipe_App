import { useState } from "react";
import {
  Center,
  Grid,
  GridItem,
  Image,
  Box,
  Text,
  Heading,
  Input,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = ({ handleRecipeSelection }) => {
  const recipesData = data.hits;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectRecipe = (recipe) => {
    handleRecipeSelection(recipe);
  };

  const hasVeganLabel = (labels) => {
    return labels.includes("Vegan");
  };

  const hasVegetarianLabel = (labels) => {
    return labels.includes("Vegetarian");
  };

  const filteredRecipes = recipesData.filter((recipe) => {
    return (
      recipe.recipe.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  return (
    <Center flexDir="column" p="4">
      <Heading as="h1" size="lg" mb="4">
        Winc Recipe Checker
      </Heading>
      <Input
        type="text"
        placeholder="Search by name or health labels"
        value={searchTerm}
        onChange={handleSearch}
        mb="4"
        maxW="400px"
        width="100%"
      />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", // Small devices (phones)
          md: "repeat(2, 1fr)", // Medium devices (tablets)
          lg: "repeat(4, 1fr)", // Large devices (desktops)
        }}
        gap={6}
        justifyContent="center"
        maxW="1000px"
        width="100%"
      >
        {filteredRecipes.map((recipe, index) => (
          <GridItem key={index}>
            <div onClick={() => handleSelectRecipe(recipe.recipe)}>
              <Box
                backgroundColor="gray.100"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p="4"
                align="center"
                width="100%" // Adjust the width
                height="lg" // Adjust the height
              >
                <Image
                  src={recipe.recipe.image}
                  alt={recipe.recipe.label}
                  width="100%"
                  height="200px" // Adjust the height
                  objectFit="cover" // Ensures consistent image sizes
                  mb="3"
                />
                <Text fontSize="sm" fontWeight="light" mb="">
                  {recipe.recipe.mealType.map((label) => label.toUpperCase())}
                </Text>
                <Text fontSize="xl" fontWeight="bold" mb="1">
                  {recipe.recipe.label}
                </Text>
                <Box>
                  {hasVeganLabel(recipe.recipe.healthLabels) &&
                  hasVegetarianLabel(recipe.recipe.healthLabels) ? (
                    <Text
                      fontSize="sm"
                      fontWeight="light"
                      mb="1"
                      backgroundColor="purple.100"
                      display="inline-block"
                    >
                      {"Vegan, Vegetarian".toUpperCase()}
                    </Text>
                  ) : (
                    <>
                      {hasVeganLabel(recipe.recipe.healthLabels) && (
                        <Text
                          fontSize="sm"
                          fontWeight="light"
                          mb="1"
                          backgroundColor="purple.100"
                          display="inline-block"
                        >
                          {"Vegan".toUpperCase()}
                        </Text>
                      )}
                      {hasVegetarianLabel(recipe.recipe.healthLabels) && (
                        <Text
                          fontSize="sm"
                          fontWeight="light"
                          mb="1"
                          backgroundColor="purple.100"
                          display="inline-block"
                        >
                          {"Vegetarian".toUpperCase()}
                        </Text>
                      )}
                    </>
                  )}
                </Box>
                <Text
                  fontSize="sm"
                  fontWeight="light"
                  mb="2"
                  backgroundColor="green.100"
                  display="inline-block"
                >
                  {recipe.recipe.dietLabels
                    .map((label) => label.toUpperCase())
                    .join(", ")}
                </Text>
                <Text fontSize="sm" fontWeight="light" mb="2">
                  <span style={{ fontWeight: "light" }}>Dish:</span>{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {recipe.recipe.dishType}
                  </span>
                </Text>
                <Text fontSize="sm" fontWeight="light" mb="1">
                  Cautions:
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="light"
                  mb="1"
                  display="inline-block"
                >
                  {recipe.recipe.cautions.map((label, index) => [
                    index > 0 && " ",
                    <Text
                      key={index}
                      as="span"
                      backgroundColor="red.100"
                      display="inline"
                    >
                      {label.toUpperCase()}
                    </Text>,
                  ])}
                </Text>
              </Box>
            </div>
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
};
