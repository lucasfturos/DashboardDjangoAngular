from django.db import models
from django.urls import reverse
from django.http import HttpResponse

class Produto(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    nome_produto = models.CharField(max_length=30)
    quantidade_produto = models.IntegerField(default=0)
    preco_produto = models.DecimalField(max_digits=5, decimal_places=2)
    descricao_produto = models.TextField(max_length=256)

    def __str__(self):
        return 'Produto: {}, Disponível: {} unidades'.format( self.nome_produto, self.quantidade_produto)

    def get_id_url(self):
        return reverse('produto_only', kwargs={'id': self.id_produto})

