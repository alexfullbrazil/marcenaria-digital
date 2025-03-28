export interface SubCategory {
	name: string;
	searchTerm: string;
}

export interface Category {
	name: string;
	id: string;
	subCategories: SubCategory[];
}

export const categories: Category[] = [
	{
		name: "Cozinha",
		id: "cozinhaDropdown",
		subCategories: [
			{ name: "Cozinha", searchTerm: "cozinha" },
			{ name: "Balcões", searchTerm: "cozinha balcões inferiores" },
			{
				name: "Balcões portas basculantes",
				searchTerm: "cozinha balcões porta basculantes",
			},
			{
				name: "Balcões porta de giro",
				searchTerm: "cozinha balcões porta de giro",
			},
			{ name: "Armários aéreos", searchTerm: "cozinha armários aéreos" },
			{
				name: "Armários aéreos basculantes",
				searchTerm: "cozinha armários aéreos porta basculante",
			},
			{
				name: "Armário aéreo porta de giro",
				searchTerm: "cozinha armário aéreo porta de giro",
			},
			{
				name: "Balcões gaveteiros",
				searchTerm: "cozinha balções gaveteiros",
			},
			{
				name: "Balcões porta temperos",
				searchTerm: "cozinha balções porta temperos",
			},
			{ name: "Nichos", searchTerm: "cozinha armário aéreo nicho" },
			{ name: "Mesas de jantar", searchTerm: "cozinha mesa de janta" },
			{ name: "Cozinha puxador alça", searchTerm: "cozinha puxador alça" },
			{ name: "Cozinha puxador gola", searchTerm: "cozinha puxador gola" },
			{
				name: "Portas para cozinha",
				searchTerm: "portas avulsas para cozinha",
			},
			{ name: "Prateleira", searchTerm: "prateleira cozinha" },
		],
	},
	{
		name: "Dormitório",
		id: "dormitorioDropdown",
		subCategories: [
			{ name: "Dormitório", searchTerm: "Dormitório" },
			{
				name: "Dormitório alto portas de giro",
				searchTerm: "Dormitório alto portas de giro",
			},
			{
				name: "Dormitório armários aéreos",
				searchTerm: "Dormitório armários aéreos",
			},
			{
				name: "Dormitório alto portas de correr",
				searchTerm: "Dormitório alto portas de correr",
			},
			{
				name: "Dormitório alto sem portas",
				searchTerm: "Dormitório alto sem portas",
			},
			{
				name: "Mesas de cabeceira",
				searchTerm: "Dormitório mesa de cabeceira",
			},
			{ name: "Dormitório sem portas", searchTerm: "Dormitório sem portas" },
			{ name: "Prateleira", searchTerm: "prateleira dormitório" },
			{
				name: "Portas para dormitório",
				searchTerm: "Portas para dormitorío",
			},
			{
				name: "Gaveteiros para dormitório",
				searchTerm: "Dormitório gaveteiro alvulso",
			},
		],
	},
	{
		name: "Banheiro",
		id: "banheiroDropdown",
		subCategories: [
			{ name: "Banheiros", searchTerm: "Banheiros sob medida" },
			{ name: "Puxador gola", searchTerm: "Banheiro puxador gola" },
			{ name: "Puxador alça", searchTerm: "Banheiro puxador alça" },
			{ name: "Prateleira", searchTerm: "prateleira banheiro" },
		],
	},
	{
		name: "Escritório",
		id: "escritorioDropdown",
		subCategories: [
			{ name: "Escritório", searchTerm: "Escritório" },
			{
				name: "Mesa de escritório",
				searchTerm: "Mesa basica reta de escritório com pés",
			},
			{
				name: "Balcões suspensos para escritório",
				searchTerm: "balcões suspensos para escritório",
			},
			{
				name: "Armários aéreos para escritório",
				searchTerm: "Armário aéreo para escritório",
			},
			{ name: "Prateleira", searchTerm: "prateleira escritório" },
		],
	},
	{
		name: "Sala",
		id: "salaDropdown",
		subCategories: [
			{
				name: "Estantes para livros",
				searchTerm: "sala estante para livros",
			},
			{ name: "Buffet", searchTerm: "buffet para salas" },
		],
	},
];

export default categories;
