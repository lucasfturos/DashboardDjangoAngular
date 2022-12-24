# Generated by Django 4.1.2 on 2022-12-24 05:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('usuario', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Produto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_produto', models.CharField(max_length=30)),
                ('quantidade_produto', models.IntegerField(default=0)),
                ('preco_produto', models.DecimalField(decimal_places=2, max_digits=30)),
                ('descricao_produto', models.TextField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='ProdutoLucro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_lucro', models.DecimalField(decimal_places=2, max_digits=30)),
                ('quantidade_lucro', models.IntegerField(default=0)),
                ('data_compra', models.DateField(default=False)),
                ('id_produto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='produto.produto')),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuario.cliente')),
            ],
        ),
    ]
