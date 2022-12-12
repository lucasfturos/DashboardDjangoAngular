from rest_framework import serializers
from produto.models import Produto

class Produto_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = (
            'id',
            'nome_produto',
            'quantidade_produto',
            'preco_produto',
            'descricao_produto'
        )