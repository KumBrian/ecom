import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";
import { ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/api/products";
import { ActivityIndicator, Alert } from "react-native";
import { useCart } from "@/store/cartStore";

export default function ProductDetails() {
  const addProduct = useCart((state) => state.addProduct);

  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });

  const addToCart = () => {
    addProduct(product);
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return Alert.alert("Something went wrong.", error.message, [
      {
        text: "Refresh",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  }

  return (
    <Card className="p-5 rounded-lg flex-1">
      <Image
        source={{
          uri: product.image,
        }}
        className="mb-6 h-[240px] w-full rounded-md"
        alt="image"
        resizeMode="contain"
      />
      <Text className="text-sm font-normal mb-2 text-typography-700">
        {product.name}
      </Text>
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
          ${product.price}
        </Heading>
        <Text size="sm">{product.description}</Text>
      </VStack>
      <Box className="flex-col sm:flex-row">
        <Button
          onPress={addToCart}
          className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1"
        >
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2 border-outline-300 sm:flex-1"
        >
          <ButtonText size="sm" className="text-typography-600">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
      <Text className="text-xs text-typography-500 mt-4"> Cart: items</Text>
    </Card>
  );
}
