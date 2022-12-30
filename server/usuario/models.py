from django.db import models

class Funcionario(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_completo_usuario = models.CharField(default='',max_length=60)
    email_usuario = models.CharField(default='',max_length=30)
    apelido_usuario = models.CharField(default='',max_length=20)
    senha_usuario = models.CharField(default='',max_length=20)
    celular_usuario = models.CharField(default='',max_length=12)
    cpf_cnpj_usuario = models.CharField(default='',max_length=20)
    cep_usuario = models.CharField(default='', max_length=10)
    endereco_usuario = models.CharField(default='', max_length=255)
    complemento_usuario = models.CharField(default='',max_length=255)
    token_usuario = models.CharField(default='',max_length=255)
    id_niveis=models.ForeignKey('NiveisUsuario', max_length=10, on_delete=models.CASCADE)

    def __str__(self):
        return 'O Usuário {} é {}'.format(self.nome_usuario, self.id_niveis) 



class Cliente(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_cliente = models.CharField(max_length=30)
    email_cliente = models.CharField(max_length=30)
    celular_cliente = models.CharField(default='',max_length=12)
    cpf_cnpj_cliente = models.CharField(default='',max_length=20)
    cep_cliente = models.CharField(default='', max_length=10)
    endereco_cliente = models.CharField(default='', max_length=255)
    complemento_cliente = models.CharField(default='',max_length=255)

    def __str__(self):
        return 'O Cliente {} portador do E-mail {}'.format(self.nome_cliente, self.email_cliente) 

class NiveisUsuario(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_niveis = models.CharField(max_length=20)
    descricao_niveis = models.CharField(max_length=20)

    def __str__(self):
        return 'nível {}'.format(self.nome_niveis)