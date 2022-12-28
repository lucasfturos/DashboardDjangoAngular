from django.urls import path 
from produto.views import ProdutoView

urlpatterns = [
    path('', ProdutoView.get_All_Produto, name='produto_list'),
    path('<int:id>', ProdutoView.get_Only_Produto, name='produto_only'),
    path('create/', ProdutoView.create_Produto, name='produto_create'),
    path('create/<int:id>', ProdutoView.update_Produto, name='produto_edit'),
    path('<int:id>/', ProdutoView.destroy_Produto, name='produto_delete'),
]
