from django.db import models
from django.urls import reverse
from usuario.models import Cliente


class Produto(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_produto = models.CharField(max_length=30)
    quantidade_produto = models.IntegerField(default=0)
    preco_produto = models.DecimalField(max_digits=30, decimal_places=2)
    descricao_produto = models.TextField(max_length=256)

    def __str__(self):
        return 'Produto: {}, Disponível: {} unidades'.format( self.nome_produto, self.quantidade_produto)

    def get_id_url(self):
        return reverse('produto_only', kwargs={'id': self.id})


class ProdutoLucro(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    id_produto = models.ForeignKey('Produto', on_delete=models.CASCADE)
    id_usuario = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    total_lucro = models.DecimalField(max_digits=30, decimal_places=2)
    quantidade_lucro = models.IntegerField(default=0)
    data_compra = models.DateField(default=False)
