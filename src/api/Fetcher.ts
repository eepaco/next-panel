import _ from "lodash";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export class Fetcher<R, ErrorR = CommonResponse> {
	private readonly input: RequestInfo | URL;
	private readonly init?: RequestInit;

	private _onNot200: ((errorResponse: ErrorR) => void) | undefined = undefined;

	constructor(input: RequestInfo | URL, init?: RequestInit) {
		const jwt = Cookies.get("jwt");

		const defaultHeadersInit: HeadersInit = {
			"access-control-allow-origin": "*",
			"access-control-allow-headers": "*",
			"content-type": "application/json",
			"Accept-Encoding": "deflate, gzip",
			...(_.isEmpty(jwt) ? {} : { Authorization: `Bearer ${jwt}` }),
		};
		var defaultReqInit: RequestInit = {
			mode: "cors",
			headers: defaultHeadersInit,
		};

		this.input = input;
		this.init = { ...defaultReqInit, ...init };
	}

	async enq(): Promise<R> {
		const response = await fetch(this.input, this.init);
		const jsonBody = await response.json();

		if (!_.isEmpty((jsonBody as CommonResponse)?.toast)) {
			if (response.ok) {
				toast.success((jsonBody as CommonResponse).toast);
			} else {
				toast.error((jsonBody as CommonResponse).toast);
			}
		}

		if (response.ok) return jsonBody as R;

		if (this._onNot200 != undefined) this._onNot200(jsonBody as ErrorR);

		return new Promise((_, reject) => reject());
	}

	onNot200(callback: (errorResponse: ErrorR) => void): Fetcher<R, ErrorR> {
		this._onNot200 = callback;
		return this;
	}
}

export type CommonResponse = {
	toast?: string;
};
