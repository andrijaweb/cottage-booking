import { appwriteConfig, databases } from '@/lib/appwrite'
import type { Cottage } from '@/types/cottage'
import { Query } from 'appwrite'

export async function getCottages() {
  try {
    const res = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.cottageCollectionId,
    )

    return res.documents
  } catch (error) {
    console.error('Error fetching cottages:', error)
    throw error
  }
}

export async function getCottageBySlug(slug: string) {
  try {
    const res = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.cottageCollectionId,
      [Query.equal('slug', slug)],
    )

    if (res.documents.length === 0) {
      throw new Error('No cottage found with provided slug.')
    }

    return res.documents[0] as Cottage
  } catch (error) {
    console.error(`Error fetching cottage with slug ${slug}:`, error)
    throw error
  }
}
