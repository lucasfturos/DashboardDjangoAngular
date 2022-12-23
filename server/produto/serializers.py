from rest_framework import serializers
from produto.models import Produto

class Produto_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'