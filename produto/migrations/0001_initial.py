# Generated by Django 4.1.2 on 2022-11-28 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Produto',
            fields=[
                ('id_produto', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_produto', models.CharField(max_length=30)),
                ('quantidade_produto', models.IntegerField(default=0)),
                ('preco_produto', models.DecimalField(decimal_places=2, max_digits=5)),
                ('descricao_produto', models.TextField(max_length=256)),
                ('data_fabricacao_produto', models.DateTimeField(blank=True, null=True)),
                ('data_validade_produto', models.DateTimeField(blank=True, null=True)),
            ],
        ),
    ]