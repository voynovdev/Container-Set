export class Team {
	constructor() {
			this.members = new Set();
	}
	add(players, number) {
		if (this.members.has(players[number - 1])) {
			throw new Error(`Ошибка! Игрок ${players[number - 1]} уже добавлен!`)
		} else {
			this.members.add(players[number - 1])
		}
	}

	addAll(players) {
		for(let player of players) {
			this.members.add(player)
		}
	}

	toArrive() {
		return Array.from(this.members);
	}
}