import { Datas } from "./datas.js";

export class Usuario{
   
    constructor (nome,email,senha){
        this.datas = new Datas();

        this.nome = nome;
        this.email = email;
        this.senha = senha;
        
    }

    get Nome(){
        return this.nome;
    }

    get Senha(){
        return this.senha;
    }


    fazerLogin(email, senha){
        if(email == this.email){
            if(senha == this.senha){
                return "Login efetuado"
            }else{
                return "Senha incorreta"
            }
        }else{
            return "email invalido"
        }
    }

}