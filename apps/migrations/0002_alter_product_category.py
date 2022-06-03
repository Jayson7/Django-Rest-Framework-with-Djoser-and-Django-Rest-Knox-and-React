# Generated by Django 4.0.4 on 2022-05-23 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apps', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('Fruit', 'Fruit'), ('Vegetable', 'Vegetable'), ('Drink', 'Drink'), ('Other', 'Other')], default='O', max_length=15),
        ),
    ]