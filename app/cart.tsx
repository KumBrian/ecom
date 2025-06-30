import { FlatList } from "react-native";
import React from "react";
import { useCart } from "@/store/cartStore";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Button, ButtonText } from "@/components/ui/button";

const Cart = () => {
  const items = useCart((state) => state.items);
  const resetCart = useCart((state) => state.resetCart);

  async function onCheckout() {
    //send order to server
    resetCart();
  }
  return (
    <FlatList
      data={items}
      contentContainerClassName="gap-2 w-full mx-auto max-w-[960px] my-2"
      renderItem={({ item }) => (
        <Box>
          <HStack className="bg-white p-3 mx-2 rounded-2xl">
            <Box>
              <Image
                source={item.product.image}
                className="w-full rounded-md aspect-[4/3]"
                alt="Image"
                resizeMode="contain"
              />
            </Box>
            <VStack space="sm">
              <Text>{item.product.name}</Text>
              <Text className="font-bold color-typography-black">
                ${item.product.price}
              </Text>
            </VStack>

            <Text className="ml-auto">{item.quantity}</Text>
          </HStack>
        </Box>
      )}
      ListEmptyComponent={
        <Box className="py-[100%] items-center">
          <Text>Cart is Empty</Text>
        </Box>
      }
      ListFooterComponent={
        items.length > 0 ? (
          <Button className="mx-2" onPress={onCheckout}>
            <ButtonText>Checkout</ButtonText>
          </Button>
        ) : (
          <Box></Box>
        )
      }
    />
  );
};

export default Cart;
