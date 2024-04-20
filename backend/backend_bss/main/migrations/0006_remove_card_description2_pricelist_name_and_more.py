# Generated by Django 5.0.3 on 2024-04-20 07:17

import main.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_card_delete_description_alter_uploadpricelist_file_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='card',
            name='description2',
        ),
        migrations.AddField(
            model_name='pricelist',
            name='name',
            field=models.CharField(default='name', max_length=100, verbose_name='Название'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='pricelist',
            name='additional',
            field=models.CharField(max_length=100, verbose_name='Доп. поле'),
        ),
        migrations.AlterField(
            model_name='pricelist',
            name='base',
            field=models.CharField(max_length=100, verbose_name='База'),
        ),
        migrations.AlterField(
            model_name='pricelist',
            name='d',
            field=models.CharField(max_length=100, verbose_name='Д (мм)'),
        ),
        migrations.AlterField(
            model_name='pricelist',
            name='l',
            field=models.CharField(max_length=100, verbose_name='L (м)'),
        ),
        migrations.AlterField(
            model_name='pricelist',
            name='prf',
            field=models.CharField(max_length=100, verbose_name='Марка'),
        ),
        migrations.AlterField(
            model_name='pricelist',
            name='price',
            field=models.CharField(max_length=100, verbose_name='Цена с НДС'),
        ),
        migrations.AlterField(
            model_name='pricelist',
            name='product_availability',
            field=models.CharField(max_length=100, verbose_name='Наличие (кг)'),
        ),
        migrations.AlterField(
            model_name='pricelist',
            name='sort',
            field=models.CharField(max_length=100, verbose_name='Сорт'),
        ),
        migrations.AlterField(
            model_name='uploadrequisite',
            name='file',
            field=models.FileField(error_messages={'invalid': 'Only pdf files!'}, upload_to='requisites', validators=[main.models.validate_requisite_extension]),
        ),
    ]
