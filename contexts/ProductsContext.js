import { createContext, useState, useEffect } from "react";
import { client, databases } from "@/lib/appwrite";

const dbId = "685fd4f10036dcc91637";
const collectionId = "686258d5000578a17f70";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      //try to get products
      const response = await databases.listDocuments(dbId, collectionId);
      setProducts(response.documents);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProductsContext.Provider value={{ products, fetchProducts, loading }}>
      {children}
    </ProductsContext.Provider>
  );
}