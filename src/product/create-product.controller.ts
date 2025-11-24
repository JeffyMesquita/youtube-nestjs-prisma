import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('product')
export class CreateProductController {
	constructor(private readonly productService: ProductService) {}

	@Post()
	@HttpCode(201)
	async createProduct(@Body() productData: { name: string; description: string; price: number }) {
		return this.productService.createProduct(productData)
	}
}
