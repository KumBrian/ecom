import { ActivityIndicator, Alert, FlatList } from "react-native";
import ProductListItem from "../components/ProductListItem";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {

    const { products, isLoading, isError, refetch, error } = useProducts();

    if (isLoading) {
        return <ActivityIndicator></ActivityIndicator>;
    }

    if (isError) {
        return Alert.alert("Something went wrong.", error, [
            {
                text: "Refresh",
                onPress: () => refetch,
            },
            {
                text: "Cancel",
                style: "cancel"
            }
        ]);
    }


    return <FlatList data={products} numColumns={2} contentContainerClassName="gap-2 my-1" renderItem={({ item }) => <ProductListItem product={item} />} />
}


