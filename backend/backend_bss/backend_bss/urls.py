from django.contrib import admin
from django.urls import path

from main.views import download_requisites, download_pricelist, get_cards, price_list_view


urlpatterns = [
    path('admin/', admin.site.urls),
    path('download-requisites/', download_requisites, name='download_requisites'),
    path('download-pricelist/', download_pricelist, name='download_pricelist'),
    path('get-cards/', get_cards, name='get_cards'),
    path('pricelist/', price_list_view, name='pricelist'),
]
