# Generated by Django 4.1.2 on 2022-12-24 04:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NiveisUsuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_niveis', models.CharField(max_length=20)),
                ('descricao_niveis', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Funcionario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_usuario', models.CharField(max_length=30)),
                ('email_usuario', models.CharField(max_length=30)),
                ('apelido_usuario', models.CharField(max_length=20)),
                ('id_niveis', models.ForeignKey(max_length=10, on_delete=django.db.models.deletion.CASCADE, to='usuario.niveisusuario')),
            ],
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_cliente', models.CharField(max_length=30)),
                ('email_cliente', models.CharField(max_length=30)),
                ('id_niveis', models.ForeignKey(max_length=10, on_delete=django.db.models.deletion.CASCADE, to='usuario.niveisusuario')),
            ],
        ),
    ]
