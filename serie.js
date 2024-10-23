import filme from "./filme.js";


export default class serie extends filme{
    constructor(nome,nomeSerie, duracao, sinopse,ano,episodio,temporada){
        super(nome,duracao,sinopse,ano)
        this.nomeSerie = nomeSerie
        this.episodio = episodio
        this.temporada = temporada
    }

    compartilhar(){
        return "Estou assistindo o episódio " + this.episodio + " da temporada "+this.temporada+" da serie"+this.nomeSerie+
         " que conta a seguinte história: "+this.sinopse+ ", foi lançado em "+this.ano+" e tem duração de "
         +this.duracao+" minutos por episódio. Assista também!!";
    }

    assistir(){
        return "Assistindo o episódio " + this.episodio + " da temporada " +this.temporada+
        " da serie" +this.nomeSerie+" - Tempo restante -> " +this.duracao + " minutos."
    }
}