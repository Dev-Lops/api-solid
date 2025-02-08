import type { UsersRepository } from '@/repositories/prisma/users-repository'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

// D - Dependency Inversion Principle (DIP)

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ email, name, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new Error('Email already exists')
    }
    // const prismaUsersRepository = new PrismaUsersRepository()

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
