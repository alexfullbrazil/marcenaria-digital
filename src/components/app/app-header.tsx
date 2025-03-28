import { Input } from "@/components/ui/input";

export function AppHeader() {
	return (
		<div className="bg-amber-500 w-full fixed top-0 z-50 h-16 flex flex-col items-center justify-center">
			<div className="container mx-auto">
				<header className="flex items-center justify-between px-4">
					<div>
						<img
							src="logo.svg"
							alt="Marcenaria Digital"
							className="w-54"
						/>
					</div>

					<div className="flex gap-4 font-semibold items-center">
						<a href="/entrar">Entre</a>
						<a
							className="bg-primary text-secondary px-6 py-2 rounded-full"
							href="/registrar">
							Cadastre-se
						</a>
					</div>
				</header>
			</div>
		</div>
	);
}
