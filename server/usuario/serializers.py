from rest_framework import serializers
from usuario.models import Funcionario, Cliente, NiveisUsuario

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class NivelUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = NiveisUsuario
        fields = '__all__'