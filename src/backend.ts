import { Developer } from "./developer";

export class Backend extends Developer {
	constructor(role: string, framework: string, salary: number) {
		super(role, framework, salary);
	}
	duty() {
		return this.responsibility;
	}
	tools() {
		return 'Postman.';
	}
	upSalary() {
		// Encapsulation
		// this.salary => Can't access private property
	}
}
