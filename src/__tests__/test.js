import { Team } from "../classData";

test('Check making container Set', () => {
	const team = new Team();
	const result = {
		members: new Set()
	};
	expect(team).toEqual(result);
});

test('Check working method add', () => {
	const players = ["Edward", "Bob", "Franklin"];
	const team = new Team();
	team.add(players, 2);
	const result = ["Bob"];
	expect(team.toArrive()).toEqual(result);
})

test('Check working error method add', () => {
	const players = ["Edward", "Bob", "Franklin"];
	const team = new Team();
	function testError() {
		team.add(players, 2)
		team.add(players, 2)
	}
	expect(() => testError()).toThrow();
})

test('Check working method addAll', () => {
	const players = ["Edward", "Bob", "Franklin"];
	const team = new Team();
	team.addAll(players);
	const result = ["Edward", "Bob", "Franklin"];
	expect(team.toArrive()).toEqual(result);
})

test('Check working method toArrive', () => {
	const team = new Team();
	const result = [];
	expect(team.toArrive()).toEqual(result);
})

