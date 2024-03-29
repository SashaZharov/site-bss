import os

from django.core.exceptions import ValidationError
from django.conf import settings
from django.db import models
from django.db.models.signals import pre_save, pre_delete
from django.dispatch import receiver
from django.contrib import admin


class Card(models.Model):
    description1 = models.TextField()
    description2 = models.TextField()

    def __str__(self):
        return f"Card {self.id}"

    class Meta:
        db_table = 'card'


def get_card_from_db():
    try:
        card = Card.objects.first()
        return card
    except Card.DoesNotExist:
        return None


@receiver(pre_save, sender=Card)
def limit_card_creation(sender, instance, **kwargs):
    # Проверяем, существует ли уже объект Card
    if Card.objects.exists() and not instance.id:
        # Если объект Card уже существует и текущий объект еще не сохранен в базу данных,
        # вызываем ValidationError, чтобы предотвратить его сохранение
        raise ValidationError("Можно создать только 1 карточку")


@receiver(pre_delete, sender=Card)
def prevent_card_deletion(sender, instance, **kwargs):
    # Предотвращаем удаление объекта Card
    raise ValidationError("Карточку нельзя удалить")


class PriceList(models.Model):
    id = models.AutoField(primary_key=True)
    sort = models.CharField(max_length=100)
    prf = models.CharField(max_length=100)
    d = models.CharField(max_length=100)
    l = models.CharField(max_length=100)
    additional = models.CharField(max_length=100)
    base = models.CharField(max_length=100)
    product_availability = models.CharField(max_length=100)
    price = models.CharField(max_length=100)

    class Meta:
        db_table = 'pricelist'


def validate_file_extension(value):
    import os
    ext = os.path.splitext(value.name)[1]  # получаем расширение файла
    valid_extensions = ['.xlsx', '.xls']  # список допустимых расширений
    if ext.lower() not in valid_extensions:
        raise ValidationError('Файлы можно сохранять только в формате .xlsx или .xls')


class UploadPriceList(models.Model):
    file = models.FileField(upload_to='priceList', validators=[validate_file_extension],
                            error_messages={'invalid': 'Only xlsx or xls files!'})

    def delete(self, *args, **kwargs):
        directory_path = os.path.join(settings.MEDIA_ROOT, 'priceList')
        for filename in os.listdir(directory_path):
            file_path = os.path.join(directory_path, filename)
            # Проверяем, является ли объект в директории файлом
            if os.path.isfile(file_path):
                # Удаляем файл
                os.remove(file_path)

        super().delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


class UploadPriceListAdmin(admin.ModelAdmin):
    def delete_queryset(self, request, queryset):
        for obj in queryset:
            obj.delete()


@receiver(pre_save, sender=UploadPriceList)
def limit_upload(sender, instance, **kwargs):
    if UploadPriceList.objects.exists() and not instance.pk:
        raise ValidationError("Можно добавить только один файл")

    if instance.pk:
        # Если объект уже существует (т.е. редактирование), просто проходим проверку
        return

    if UploadPriceList.objects.exists():
        # Если уже есть запись в базе данных, вызываем ValidationError
        raise ValidationError("Можно добавить только один файл")


class UploadRequisite(models.Model):
    file = models.FileField(upload_to='requisites')

    def __str__(self):
        return self.file.name
