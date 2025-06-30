
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import { Pressable } from "react-native";
export default function ProductListItem({ product }) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable className="flex-1">
        <Card className="mx-1 p-5 rounded-lg max-w-[360px] flex-1">

          <Image
            source={{
              uri: product.image,
            }}
            className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
            alt="image"
            resizeMode="contain"
          />
          <Text className="text-sm font-normal mb-2 text-typography-700">
            {product.name}
          </Text>

          <Heading size="md" className="mb-4">
            ${product.price}
          </Heading>


        </Card>
      </Pressable>
    </Link>
  ); // This is a placeholder for the ProductListItem component
}