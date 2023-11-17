function saldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

function categoriaNivelHeroi(saldoVitorias) {
    if (saldoVitorias >= 0 && saldoVitorias < 10) {
        return "Ferro";
    } else if (saldoVitorias <= 20) {
        return "Bronze";
    } else if (saldoVitorias <= 50) {
        return "Prata";
    } else if (saldoVitorias <= 80) {
        return "Ouro";
    } else if (saldoVitorias <= 90) {
        return "Diamante";
    } else if (saldoVitorias <= 100) {
        return "Lendário";
    } else if (saldoVitorias >= 101) {
        return "Imortal";
    } else {
        return "Sem saldo";
    }
}

function exibirMensagem(vitorias, derrotas) {
    const saldo = saldoVitorias(vitorias, derrotas);
    const nivelHeroi = categoriaNivelHeroi(saldo);

    console.log(`O herói tem um saldo de ${saldo} e está no nível de ${nivelHeroi}`);
}

let vitorias = 100;
let derrotas = 10;

exibirMensagem(vitorias, derrotas);
