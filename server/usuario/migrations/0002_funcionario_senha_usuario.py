# Generated by Django 4.1.2 on 2022-12-28 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='funcionario',
            name='senha_usuario',
            field=models.CharField(default='', max_length=20),
        ),
    ]