export abstract class MainDuty {
	abstract coding(): string; // The mission
}

export class ClientSide extends MainDuty {
	private framework: string;

	constructor(framework: string) {
		super();
		this.framework = framework;
	}

	// Polymophism => Same mission but different operation in method
	coding(): string {
		return `Coding in client-side by: ${this.framework}`;
	}
}

export class ServerSide extends MainDuty {
	private framework: string;

	constructor(framework: string) {
		super();
		this.framework = framework;
	}

	// Polymophism => Same mission but different operation in method
	coding(): string {
		return `Coding in server-side by: ${this.framework}`;
	}
}