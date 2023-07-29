export namespace ApiModels {
	export type Card = {
		count: number;
		next?: string;
		previous?: string;
		results: { name: string; url: string }[];
	};
}
