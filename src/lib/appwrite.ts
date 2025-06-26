import { Client, Account, Databases } from 'appwrite'

export const appwriteConfig = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  cottageCollectionId: import.meta.env.VITE_APPWRITE_COTTAGE_COLLECTION_ID,
}

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)

const account = new Account(client)
const databases = new Databases(client)

export { client, account, databases }
