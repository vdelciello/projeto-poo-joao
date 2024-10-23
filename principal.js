import { Usuario } from './Usuario.js';
import { funcoesES } from './EntradaSaida.js';
import filme from './filme.js';
import serie from './serie.js';


const EntradaSaida = new funcoesES()

const numeros = [0,1,2]



//--------------------Usuario-----------------//

const Usuarios = [new Usuario("Ana", "ana@gmail.com", "12345678"),
                new Usuario("Denis", "denis@teste.com", "12345678"),
                new Usuario("Erika", "erika@gmail.com", "12345678")

]
for  (var i = 0;i < Usuarios.length; i++){
    EntradaSaida.mensagemCompleta(i +" - "+ Usuarios[i].Nome);
}

var resposta = Number(EntradaSaida.entrada("Digite um Usuário"))
// EntradaSaida.mensagemCompleta(Usuarios[resposta].fazerLogin(email,senha));

var email = EntradaSaida.entrada("Digite um email")
var senha = EntradaSaida.entrada("Digite uma senha")

var resultado = EntradaSaida.mensagemCompleta(Usuarios[resposta].fazerLogin(email,senha));
// var resultado = (Usuario.fazerLogin())

 if (resultado == "Login efetuado"){
EntradaSaida.mensagemCompleta("Bem vindo "+this.Nome)

}

//------------------------------------------------------------//