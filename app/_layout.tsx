import { Link, Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart } from "lucide-react-native";
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";

const queryClient = new QueryClient();

export default function RootLayout() {
  const cartItemsNum = useCart((state) => state.items.length);
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode="light">
        <Stack
          screenOptions={{
            headerRight: () => (
              <Link href={"cart"} asChild>
                <Pressable className="flex-row gap-2">
                  <Icon as={ShoppingCart} />
                  {cartItemsNum > 0 && <Text>{cartItemsNum}</Text>}
                </Pressable>
              </Link>
            ),
          }}
        >
          <Stack.Screen name="index" options={{ title: "Shop" }} />
          <Stack.Screen name="product/[id]" options={{ title: "Product" }} />
          <Stack.Screen
            name="cart"
            options={{ title: "Cart", headerRight: () => null }}
          />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  ); // This is a placeholder for the root layout component
}
