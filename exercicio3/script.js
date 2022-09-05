const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

console.log(pokemon1)

const pokemon2 = {...pokemon1,nome:"Squirtle",tipo:"Água"}

console.log(pokemon2)
const investida={
	nome: "Investida",
	dano: 40,
	tipo: "Normal",
	precisao: 100,
}
const folhaNavalha={
	nome: "Folha Navalha",
	dano: 45,
	tipo: "Grama",
	precisao: 100,
}
const jatoDeAgua={
	nome: "Jato de Água",
	dano: 40,
	tipo: "Grama",
	precisao: 100,
}

pokemon1.ataques=[]
pokemon1.ataques.push(investida)


pokemon2 = [...pokemon1.ataques]


console.log(pokemon1,pokemon2)