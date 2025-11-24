import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { ProductService } from './product.service'
import { ProductController } from './list-product.controller'
import { CreateProductController } from './create-product.controller'

@Module({
	imports: [DatabaseModule],
	providers: [ProductService],
	controllers: [ProductController, CreateProductController]
})
export class ProductModule {}
