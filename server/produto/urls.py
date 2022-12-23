from django.urls import path 
from produto.views import ProdutoView

urlpatterns = [
    path('produto/', ProdutoView.get_All_Produto, name='produto_list'),
    path('produto/<int:id>', ProdutoView.get_Only_Produto, name='produto_only'),
    path('produto/create/', ProdutoView.create_Produto, name='produto_create'),
    path('produto/create/<int:id>', ProdutoView.update_Produto, name='produto_edit'),
    path('produto/<int:id>/', ProdutoView.destroy_Produto, name='produto_delete'),
]
