import { appwriteConfig, databases } from '@/lib/appwrite'

export async function getCottages() {
  try {
    const res = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.cottageCollectionId,
    )
    console.log('Response:', res)

    return res.documents
  } catch (error) {
    console.error('Error fetching cottages:', error)
    throw error
  }
}
