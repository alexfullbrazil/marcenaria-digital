import { getProducts, type Product } from "@/services/products";
import { categories, type Category, type SubCategory } from "@/data/categories";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export default async function Products() {
	const products = await getProducts();

	return (
		<>
			<div className="container py-8 px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-1">
						<div className="sticky top-26">
							<Input
								placeholder="Buscar"
								className="w-full py-6 px-6 mb-4"
							/>

							<Accordion
								type="multiple"
								className="w-full">
								{categories.map((category: Category) => (
									<AccordionItem
										key={category.id}
										value={category.id}>
										<AccordionTrigger className="text-base cursor-pointer">
											{category.name}
										</AccordionTrigger>
										<AccordionContent>
											<ul className="space-y-2 py-2 pl-4 border-l border-amber-500">
												{category.subCategories.map(
													(
														subCategory: SubCategory,
														index: number
													) => (
														<li key={index}>
															<a
																href={`/produtos?search=${encodeURIComponent(
																	subCategory.searchTerm
																)}`}
																className="hover:underline block py-1 text-slate-600">
																{subCategory.name}
															</a>
														</li>
													)
												)}
											</ul>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</div>

					<div className="md:col-span-3">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{products.map((product: Product, index: number) => (
								<div
									key={index}
									className="group">
									<a
										href={product.url}
										target="_blank"
										rel="noopener noreferrer"
										className="block">
										<div className="border relative rounded-xl overflow-hidden bg-card transition-all duration-300 hover:shadow-md">
											<div className="text-sm absolute top-4 left-4 z-1 text-secondary line-through bg-amber-500 rounded-full px-3 py-1 font-bold">
												R${product.originalPrice}
											</div>
											<div className="aspect-4/3 relative bg-muted border-b border-amber-500">
												<img
													src={product.image}
													alt={product.name}
													className="w-full h-full object-contain p-4"
												/>
											</div>
											<div className="p-6">
												<h2 className="text-base font-medium line-clamp-2 mb-2">
													{product.name}
												</h2>
												<div className="flex flex-col xl:flex-row gap-4 w-full justify-between items-center">
													<span className="text-lg font-semibold text-primary">
														R$
														<span className="font-bold text-3xl tracking-tighter">
															{product.discountPrice}
														</span>
													</span>
													<div className="flex gap-2 items-center bg-primary text-white text-sm rounded-full px-4 py-2 font-semibold">
														Personalizar
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
