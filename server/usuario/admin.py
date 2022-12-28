from django.contrib import admin
from usuario.models import Cliente, NiveisUsuario, Funcionario
from rest_framework.authtoken.admin import TokenAdmin

TokenAdmin.raw_id_fields = ['user']
admin.site.register(Cliente)
admin.site.register(Funcionario)
admin.site.register(NiveisUsuario)