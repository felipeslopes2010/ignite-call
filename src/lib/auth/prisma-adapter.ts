import { Adapter } from 'next-auth/adapters'
import { prisma } from '../prisma'

export function PrismaAdapter(): Adapter {
  return {
    async createUser(profile) {
      return null
    },
    async getUser(id) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id,
        },
      })

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },
    async getUserByEmail(email) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email,
        },
      })

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },
    async getUserByProviderAccountId(providerId, providerAccountId) {
      return null
    },
    async updateUser(user) {
      return null
    },
    async deleteUser(userId) {
      return null
    },
    async linkAccount(
      userId,
      providerId,
      providerType,
      providerAccountId,
      refreshToken,
      accessToken,
      accessTokenExpires,
    ) {
      return null
    },
    async unlinkAccount(userId, providerId, providerAccountId) {
      return null
    },
    async createSession(user) {
      return null
    },
    async getSession(sessionToken) {
      return null
    },
    async updateSession(session, force) {
      return null
    },
    async deleteSession(sessionToken) {
      return null
    },
    async createVerificationRequest(identifier, url, token, secret, provider) {
      return null
    },
    async getVerificationRequest(identifier, token, secret, provider) {
      return null
    },
    async deleteVerificationRequest(identifier, token, secret, provider) {
      return null
    },
  }
}
