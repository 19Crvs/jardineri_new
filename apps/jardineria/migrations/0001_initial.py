# Generated by Django 4.2.1 on 2023-06-25 01:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('sku', models.CharField(max_length=15, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('precio', models.IntegerField()),
                ('stock', models.IntegerField()),
                ('fecha', models.DateField(auto_now_add=True)),
                ('descripcion', models.CharField(max_length=120)),
                ('imagenUrl', models.ImageField(upload_to='imagenesProducto')),
            ],
        ),
    ]
