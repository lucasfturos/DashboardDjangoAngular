from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):
    def create_user(self, email, username=None, password=None,**extrafields):
        if not email:
            raise ValueError('O usuário deve ter um email!')
        user = self.model(username=username, email=self.normalize_email(email), **extrafields)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def createSuperUser(self, email, username=None, password=None):
        user = self.create_user(email,username, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class Funcionario(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_usuario = models.CharField(max_length=30)
    email_usuario = models.CharField(max_length=30)
    username = models.CharField(max_length=20)
    password = models.CharField(default='',max_length=20)
    id_niveis=models.ForeignKey('NiveisUsuario', max_length=10, on_delete=models.CASCADE)
    
    objects = UserManager()
    USERNAME_FIELD = 'email'

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