# Generated by Django 5.0.3 on 2024-03-21 20:22

import main.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_alter_uploadpricelist_file'),
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description1', models.TextField()),
                ('description2', models.TextField()),
            ],
            options={
                'db_table': 'card',
            },
        ),
        migrations.DeleteModel(
            name='Description',
        ),
        migrations.AlterField(
            model_name='uploadpricelist',
            name='file',
            field=models.FileField(error_messages={'invalid': 'Only xlsx or xls files!'}, upload_to='priceList', validators=[main.models.validate_file_extension]),
        ),
        migrations.AlterField(
            model_name='uploadrequisite',
            name='file',
            field=models.FileField(upload_to='requisites'),
        ),
    ]
