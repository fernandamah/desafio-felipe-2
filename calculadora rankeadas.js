
let saldoVitorias = 90
let saldoDerrotas = 27
let nivel = ""
let resultado = partidas(saldoVitorias, saldoDerrotas)

function partidas(saldoVitorias, saldoDerrotas) {
    let ranking = saldoVitorias - saldoDerrotas
    return ranking
}

if (resultado < 10) {
    nivel = "Ferro"
}
else if (resultado > 11 && resultado <= 20) {
    nivel = "Bronze"
}
else if (resultado > 21 && resultado <= 50) {
    nivel = "Prata"
}
else if (resultado > 51 && resultado <= 80) {
    nivel = "Ouro"
}
else if (resultado > 81 && resultado <= 90) {
    nivel = "Diamante"
}
else if (resultado > 91 && resultado <= 100) {
    nivel = "Lendário"
}
else {
    nivel = "Imortal"
}
console.log("O Herói tem de saldo", resultado, "vitórias e está no nível de", nivel)