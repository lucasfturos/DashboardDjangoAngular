from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from usuario.serializers import FuncionarioSerializer, ClienteSerializer, NivelUsuarioSerializer
from usuario.models import Funcionario, Cliente, NiveisUsuario
from rest_framework import status, permissions

class UsuariosViews:
    # Pega todos os dados dos cliente, funcionarios e seus respectivos niveis
    @api_view(['GET'])
    @permission_classes((permissions.AllowAny,))
    def get_All_Funcionario(request):
        funcionario = Funcionario.objects.all()
        funcionario_serializer = FuncionarioSerializer(funcionario, many=True)
        return Response(funcionario_serializer.data,status=status.HTTP_200_OK)
    @api_view(['GET'])
    @permission_classes((permissions.AllowAny,))
    def get_All_Cliente(request):
        cliente = Cliente.objects.all()
        cliente_serializer = FuncionarioSerializer(cliente, many=True)
        return Response(cliente_serializer.data,status=status.HTTP_200_OK)
    # Pega os dados dos cliente, funcionarios e seus respectivos niveis pelo id
    @api_view(['GET'])
    @permission_classes((permissions.AllowAny,))
    def get_Only_Funcionario(request, id):
        funcionario = Funcionario.objects.filter(id=id)
        funcionario_serializer = FuncionarioSerializer(funcionario, many=True)
        return Response(funcionario_serializer.data, status=status.HTTP_200_OK)
    @api_view(['GET'])
    @permission_classes((permissions.AllowAny,))
    def get_Only_Cliente(request, id):
        cliente = Cliente.objects.filter(id=id)
        cliente_serializer = ClienteSerializer(cliente, many=True)
        return Response(cliente_serializer.data, status=status.HTTP_200_OK)
    # Cadastra cliente, funcionarios e niveis
    @api_view(['POST'])
    @permission_classes((permissions.AllowAny,))
    def create_Funcionario(request):
        funcionario_serializer = FuncionarioSerializer(data=request.data)
        if funcionario_serializer.is_valid():
            funcionario_serializer.save()
            return Response(funcionario_serializer.data, status=status.HTTP_201_CREATED)
        return Response(funcionario_serializer.errors)
    @api_view(['POST'])
    @permission_classes((permissions.AllowAny,))
    def create_Cliente(request):
        cliente_serializer = ClienteSerializer(data=request.data)
        if cliente_serializer.is_valid():
            cliente_serializer.save()
            return Response(cliente_serializer.data, status=status.HTTP_201_CREATED)
        return Response(cliente_serializer.errors)
    # Atualiza os dados dos cliente, funcionarios e niveis 
    @api_view(['PUT'])
    @permission_classes((permissions.AllowAny,))
    def update_Funcionario(request,id):
        funcionario = Funcionario.objects.get(id=id)
        funcionario_serializer = FuncionarioSerializer(funcionario,data=request.data)
        if funcionario_serializer.is_valid():
            funcionario_serializer.save()
            return Response(funcionario_serializer.data, status=status.HTTP_201_CREATED)
        return Response(funcionario_serializer.errors)
    @api_view(['PUT'])
    @permission_classes((permissions.AllowAny,))
    def update_Cliente(request,id):
        cliente = Cliente.objects.get(id=id)
        cliente_serializer = ClienteSerializer(cliente,data=request.data)
        if cliente_serializer.is_valid():
            cliente_serializer.save()
            return Response(cliente_serializer.data, status=status.HTTP_201_CREATED)
        return Response(cliente_serializer.errors)
    @api_view(['DELETE'])
    @permission_classes((permissions.AllowAny,))
    def destroy_Funcionario(request,id):
        if request.method == 'DELETE':
            funcionario = Funcionario.objects.get(id=id)
            funcionario.delete()
            return Response('Funcionario removido do sistema com sucesso', status=status.HTTP_200_OK)
        return Response('O funcionario selecionado não existe', status=status.HTTP_204_NO_CONTENT)
    @api_view(['DELETE'])
    @permission_classes((permissions.AllowAny,))
    def destroy_Cliente(request,id):
        if request.method == 'DELETE':
            cliente = Cliente.objects.get(id=id)
            cliente.delete()
            return Response('Cliente removido do sistema com sucesso', status=status.HTTP_200_OK)
        return Response('O cliente selecionado não existe', status=status.HTTP_204_NO_CONTENT)
