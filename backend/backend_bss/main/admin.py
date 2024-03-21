from django.contrib import admin

from .models import PriceList, Card, UploadPriceList, UploadRequisite, UploadPriceListAdmin

admin.site.register(PriceList)
admin.site.register(Card)
admin.site.register(UploadRequisite)
admin.site.register(UploadPriceList, UploadPriceListAdmin)
