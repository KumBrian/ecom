import { ActivityIndicator, Alert, FlatList } from "react-native";
import ProductListItem from "../components/ProductListItem";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {

    const { products, isLoading, error } = useProducts();

    if (isLoading) {
        return <ActivityIndicator>Loading...</ActivityIndicator>;
    }

    if (error) {
        return Alert.alert("Something went wrong.", error);
    }


    return <FlatList data={products} numColumns={2} contentContainerClassName="gap-2 my-1" renderItem={({ item }) => <ProductListItem product={item} />} />
}


