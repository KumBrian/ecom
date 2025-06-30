//code for appwrite.js
import { Client, Databases } from 'react-native-appwrite';

APPWRITE_PROJECT_ID=process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
APPWRITE_ENDPOINT=process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;

export const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)
    .setPlatform('com.briantech.ecom');
export const databases = new Databases(client);