import { databases } from "@/lib/appwrite";
import { Query } from "react-native-appwrite";

// Your Appwrite database and collection IDs
const dbId = "685fd4f10036dcc91637";
const collectionId = "686258d5000578a17f70";


export const fetchProducts = async () => {
  try {
    const response = await databases.listDocuments(dbId, collectionId);
    return response.documents;
  } catch (e) {
    throw e;
  }
};

export const fetchProductById = async (id: string) => {
  const response = await databases.getDocument(dbId, collectionId, id);
  return response;
}
