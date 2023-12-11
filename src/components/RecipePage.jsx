import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const RecipePage = ({ recipe }) => {
  const handleGoBack = () => {
    window.location.href = document.referrer;
  };

  const dietColor = "green.100";
  const cautionColor = "red.100";
  const healthLabelColor = "purple.100";

  const roundQuantity = (quantity) => {
    return Math.round(quantity);
  };

  return (
    <Center p="4">
      <Box maxW="800px">
        <Button onClick={handleGoBack} mb="4">
          Back
        </Button>
        <Flex direction="column" alignItems="center" mb="4">
          <Heading as="h2" size="lg" mb="2">
            {recipe.label}
          </Heading>
          <Image
            src={recipe.image}
            alt={recipe.label}
            width="100%"
            height="200px"
            objectFit="cover"
          />
        </Flex>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
          <Box>
            <Text> {recipe.mealType.join(", ").toUpperCase()}</Text>
            <Heading as="h4" size="md">
              {recipe.label}
            </Heading>
            <Text>Total Cooking Time: {recipe.totalTime}</Text>
            <Text>Servings: {recipe.yield}</Text>
            <Heading as="h4" size="md" mt="4">
              Ingredients
            </Heading>
            <VStack align="start" mt="2">
              {recipe.ingredients.map((ingredient, index) => (
                <Text key={index}>{ingredient.text}</Text>
              ))}
            </VStack>
          </Box>
          <Box>
            <Heading as="h4" fontSize="md" fontWeight="normal">
              Health Labels:
            </Heading>
            <Text
              backgroundColor={healthLabelColor}
              mb="2"
              display="inline-block"
              as="span"
              fontSize="sm"
              fontWeight="bold"
            >
              {recipe.healthLabels.join(", ").toUpperCase()}
            </Text>
            <Heading as="h4" fontSize="md" fontWeight="normal">
              Diet:
            </Heading>
            <Text
              backgroundColor={dietColor}
              mb="2"
              display="inline-block"
              as="span"
              fontSize="sm"
              fontWeight="bold"
            >
              {recipe.dietLabels.join(", ").toUpperCase()}
            </Text>
            <Heading as="h4" fontSize="md" fontWeight="normal">
              Cautions:
            </Heading>
            <Text
              backgroundColor={cautionColor}
              mb="2"
              display="inline-block"
              fontSize="sm"
              fontWeight="bold"
            >
              {recipe.cautions.join(", ").toUpperCase()}
            </Text>
            <Heading as="h4" fontSize="md" fontWeight="normal">
              Total Nutrients:
            </Heading>
            <VStack align="start" mt="2">
              <Text>
                Energy (kcal):{" "}
                {roundQuantity(recipe.totalNutrients.ENERC_KCAL.quantity)}
              </Text>
              <Text>
                Protein: {roundQuantity(recipe.totalNutrients.PROCNT.quantity)}{" "}
                {recipe.totalNutrients.PROCNT.unit}
              </Text>
              <Text>
                Fat: {roundQuantity(recipe.totalNutrients.FAT.quantity)}{" "}
                {recipe.totalNutrients.FAT.unit}
              </Text>
              <Text>
                Carbs: {roundQuantity(recipe.totalNutrients.CHOCDF.quantity)}{" "}
                {recipe.totalNutrients.CHOCDF.unit}
              </Text>
              <Text>
                Cholesterol:{" "}
                {roundQuantity(recipe.totalNutrients.CHOLE.quantity)}{" "}
                {recipe.totalNutrients.CHOLE.unit}
              </Text>
              <Text>
                Sodium: {roundQuantity(recipe.totalNutrients.NA.quantity)}{" "}
                {recipe.totalNutrients.NA.unit}
              </Text>
            </VStack>
          </Box>
        </Grid>
      </Box>
    </Center>
  );
};

export default RecipePage;
