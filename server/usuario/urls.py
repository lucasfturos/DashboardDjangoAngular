from django.urls import path 
from usuario.views import UsuariosViews

urlpatterns = [
    path('usuario/', UsuariosViews.get_All_Funcionario, name='funcionario_list'),
    path('usuario/<int:id>', UsuariosViews.get_Only_Funcionario, name='funcionario_only'),
    path('usuario/create', UsuariosViews.create_Funcionario, name='funcionario_create'),
    path('usuario/create/<int:id>', UsuariosViews.update_Funcionario, name='funcionario_edit'),
    path('usuario/<int:id>/', UsuariosViews.destroy_Funcionario, name='funcionario_delete'),
    path('cliente/', UsuariosViews.get_All_Cliente, name='cliente_list'),
    path('cliente/<int:id>', UsuariosViews.get_Only_Cliente, name='cliente_only'),
    path('cliente/create', UsuariosViews.create_Cliente, name='cliente_create'),
    path('cliente/create/<int:id>', UsuariosViews.update_Cliente, name='cliente_edit'),
    path('cliente/<int:id>/', UsuariosViews.destroy_Cliente, name='cliente_delete'),
]
