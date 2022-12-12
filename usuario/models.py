from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class ClienteFuncionario(models.Model):
    id_usuario = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_usuario = models.CharField(max_length=30)
    email_usuario = models.CharField(max_length=30)
    apelido_usuario = models.CharField(max_length=20)
    id_niveis=models.ForeignKey('NiveisUsuario',
    max_length=3,
    on_delete=models.CASCADE,
        validators=[
            MaxValueValidator(3),
            MinValueValidator(1)
        ]
    )
    def __str__(self):
        return self.nome_usuario

class NiveisUsuario(models.Model):
    id_niveis = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_niveis = models.CharField(max_length=20)
    descricao_niveis = models.CharField(max_length=20)

    def __str__(self):
        return self.nome_niveis