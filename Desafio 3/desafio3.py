class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        if self.tipo == "mago":
            ataque = "magia"
        elif self.tipo == "guerreiro":
            ataque = "espada"
        elif self.tipo == "monge":
            ataque = "artes marciais"
        elif self.tipo == "ninja":
            ataque = "shuriken"
        else:
            ataque = "ataque indefinido"

        print(f"O {self.tipo} atacou usando {ataque}.")


heroi1 = Heroi("Anagorn", 30, "guerreiro")
heroi2 = Heroi("Gandalf", 150, "mago")

heroi1.atacar()
heroi2.atacar()