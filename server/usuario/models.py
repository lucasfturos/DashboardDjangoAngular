from django.db import models

class Funcionario(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_usuario = models.CharField(max_length=30)
    email_usuario = models.CharField(max_length=30)
    apelido_usuario = models.CharField(max_length=20)
    id_niveis=models.ForeignKey('NiveisUsuario', max_length=10, on_delete=models.CASCADE)
    
    def __str__(self):
        return 'O Usuário {} é {}'.format(self.nome_usuario, self.id_niveis) 

class Cliente(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_cliente = models.CharField(max_length=30)
    email_cliente = models.CharField(max_length=30)
    id_niveis=models.ForeignKey('NiveisUsuario', max_length=10, on_delete=models.CASCADE)

    def __str__(self):
        return 'O Usuário {} é {}'.format(self.nome_cliente, self.id_niveis) 

class NiveisUsuario(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_niveis = models.CharField(max_length=20)
    descricao_niveis = models.CharField(max_length=20)

    def __str__(self):
        return 'O nível {} é {}'.format(self.nome_niveis,self.descricao_niveis)