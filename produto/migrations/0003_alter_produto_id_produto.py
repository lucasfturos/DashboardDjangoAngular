# Generated by Django 4.1.2 on 2022-12-09 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produto', '0002_remove_produto_data_fabricacao_produto_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produto',
            name='id_produto',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='id'),
        ),
    ]
