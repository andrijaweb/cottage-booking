import { account, appwriteConfig, databases } from '@/lib/appwrite'
import { ID } from 'appwrite'

export async function signup(user: any) {
  try {
    const newAccount = await account.create(ID.unique(), user.email, user.password, user.name)

    if (!newAccount) throw new Error('Failed to create account')

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user,
    )

    return newUser
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function login({ email, password }: { email: string; password: string }) {
  try {
    const session = await account.createEmailPasswordSession(email, password)

    return session
  } catch (error) {
    console.error('Error during login:', error)
    throw error
  }
}

export async function logout() {
  try {
    await account.deleteSession('current')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}

export async function getUserSession() {
  try {
    const session = await account.getSession('current')

    return session
  } catch (error) {
    console.log('Error getting user session:', error)
    return null
  }
}

export async function getAccount() {
  return await account.get()
}
