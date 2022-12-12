from produto.models import Produto
from produto.serializers import Produto_Serializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from django.shortcuts import get_object_or_404
from django.http import HttpResponse


class ProdutoView:
    @api_view(['GET'])
    @permission_classes((permissions.AllowAny,))
    def get_All_Produto(request):
        produto = Produto.objects.all()
        produto_serializer = Produto_Serializer(produto, many=True)
        return Response(produto_serializer.data, status=status.HTTP_200_OK)
    
    @api_view(['GET'])
    @permission_classes((permissions.AllowAny,))
    def get_Only_Produto(request, id):
        produto = Produto.objects.filter(id=id)
        produto_serializer = Produto_Serializer(produto,many=True)
        return Response(produto_serializer.data, status=status.HTTP_200_OK)
    
    @api_view(['POST'])
    @permission_classes((permissions.AllowAny,))
    def create_Produto(request):
        produto_serializer = Produto_Serializer(data=request.data)
        if produto_serializer.is_valid():
            produto_serializer.save()
            return Response(produto_serializer.data, status=status.HTTP_201_CREATED)
        return Response(produto_serializer.errors)

    @api_view(['PUT'])
    @permission_classes((permissions.AllowAny,))
    def update_Produto(request, id):
        produto = get_object_or_404(Produto, id=id)
        produto_serializer = Produto_Serializer(produto,many=True)
        if produto_serializer.is_valid():
            produto_serializer.save()
            return Response(produto_serializer.data, status=status.HTTP_201_CREATED)
        return Response(produto_serializer.errors)
    
    @api_view(['DELETE'])
    @permission_classes((permissions.AllowAny,))
    def destroy_Produto(request, id):
        if request.method == 'DELETE':
            produto = get_object_or_404(Produto, id=id)
            produto.delete()
            return Response('Produto excluido com sucesso', status=status.HTTP_200_OK)
        return Response('O produto selecionado não existe', status=status.HTTP_204_NO_CONTENT)