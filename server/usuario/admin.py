from django.contrib import admin
from usuario.models import Cliente, NiveisUsuario, Funcionario

admin.site.register(Cliente)
admin.site.register(Funcionario)
admin.site.register(NiveisUsuario)