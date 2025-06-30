import { FlatList } from "react-native";
import ProductListItem from "../components/ProductListItem";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {

    const { products } = useProducts();


    return <FlatList data={products} numColumns={2} contentContainerClassName="gap-2 my-1" renderItem={({ item }) => <ProductListItem product={item} />} />
}


