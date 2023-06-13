/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/
class MeuErro extends Error{
  constructor(mensagem) {
    super(mensagem);
    this.name = "MeuErro";
  }
  }

class Animal {
    constructor(nome, idade, especie) {
      this.nome = nome;
      this.idade = idade;
      this.especie = especie;
    }
  
    mostrarAtributos(){
    try{
      return this.atributos();
      } catch (error) {
        return error
  
    }
  }
  
    atributos() {
    if(this.nome != ""){
      return {
        nome: this.nome,
        idade: this.idade,
        especie: this.especie
      };
    } else{
    throw new MeuErro("Mensagem de erro");
  }
  }
  }
  const meuAnimal = new Animal("", 3, "cachorro");
  console.log(meuAnimal.mostrarAtributos());
  
  // Imprimindo os atributos
  /*console.log(atributos.nome);   
  console.log(atributos.idade);  
  console.log(atributos.especie); */
  
  