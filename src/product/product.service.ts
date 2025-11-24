import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/database/database.service'

export type CreateProductData = Prisma.Args<Prisma.ProductDelegate, 'create'>['data']

@Injectable()
export class ProductService {
	constructor(private readonly prisma: PrismaService) {}

	async getAllProducts() {
		return this.prisma.product.findMany()
	}

	async createProduct(data: CreateProductData) {
		return this.prisma.product.create({
			data
		})
	}
}
