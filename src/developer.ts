import { ClientSide, ServerSide } from "./main-duty";

export class Developer {
	private role: string;
	protected framework: string; // Inheritance + Encapsulation
	protected responsibility: string; // Inheritance + Encapsulation
	private salary: number;

	constructor(role: string, framework: string, salary: number) {
		this.role = role;
		this.framework = framework;
		this.responsibility = '';
		this.salary = salary;
	}

	// Inheritance
	assign() {
		if (this.role === 'Frontend') {
			const clientSide = new ClientSide(this.framework);
			this.responsibility = clientSide.coding();
		} else {
			const serverSide = new ServerSide(this.framework);
			this.responsibility = serverSide.coding();
		}
	};

	// Encapsulation
	bonus(): number {
		if (this.role === 'Frontend') {
			return this.salary * 1.5;
		} else {
			return this.salary * 1.7;
		}
	}
}
