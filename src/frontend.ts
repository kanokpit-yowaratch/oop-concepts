import { Developer } from "./developer";

export class Frontend extends Developer {
	constructor(role: string, framework: string, salary: number) {
		super(role, framework, salary);
	}
	duty() {
		return this.responsibility;
	}
	debugOn() {
		return 'Browser developer tools.';
	}
	upSalary() {
		// Encapsulation
		// this.salary => Can't access private property
	}
}
