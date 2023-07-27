import { Fetcher } from "./Fetcher";

const BASE_URL = process.env.API_BASE_URL;

export namespace Api {
	export function getHello() {
		return new Fetcher(new URL(`${BASE_URL}/hello`));
	}

	export function getCards() {
		return new Fetcher(new URL(`https://pokeapi.co/api/v2/pokemon`));
	}

	export function sendHello({ name }: { name: string }) {
		return new Fetcher(new URL(`${BASE_URL}/name`), {
			method: "POST",
			body: JSON.stringify({ name }),
		});
	}
}
