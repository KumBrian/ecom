import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { ProductsProvider } from "@/contexts/ProductsContext";

export default function RootLayout() {
  return <GluestackUIProvider mode="light">
    <ProductsProvider>
      <Stack />
    </ProductsProvider>

  </GluestackUIProvider>; // This is a placeholder for the root layout component
}