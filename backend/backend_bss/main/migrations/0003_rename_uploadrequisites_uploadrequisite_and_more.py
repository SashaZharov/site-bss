# Generated by Django 5.0.3 on 2024-03-04 21:14

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_uploadpricelist_uploadrequisites'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UploadRequisites',
            new_name='UploadRequisite',
        ),
        migrations.AlterField(
            model_name='uploadpricelist',
            name='file',
            field=models.FileField(error_messages='Only xlsx files!', upload_to='fileStorage/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['xlsx'])]),
        ),
    ]