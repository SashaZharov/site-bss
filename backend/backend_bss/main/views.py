import os

from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, JsonResponse

from backend_bss import settings
from main.models import get_card_from_db


def download_requisites(request):
    folder_path = os.path.join(settings.MEDIA_ROOT, 'requisites')
    file_list = os.listdir(folder_path)

    if file_list:
        file_name = file_list[0]
        file_path = os.path.join(folder_path, file_name)
        if os.path.exists(file_path):
            with open(file_path, 'rb') as file:
                file_data = file.read()

        response = HttpResponse(file_data, content_type='application/pdf')

        return response
    else:
        return HttpResponse('Requisites not found', status=404)


def download_pricelist(request):
    folder_path = os.path.join(settings.MEDIA_ROOT, 'priceList')
    file_list = os.listdir(folder_path)

    if file_list:
        file_name = file_list[0]
        file_path = os.path.join(folder_path, file_name)
        if os.path.exists(file_path):
            with open(file_path, 'rb') as file:
                file_data = file.read()

        response = HttpResponse(file_data, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')

        return response
    else:
        return HttpResponse('Price list not found', status=404)


def get_cards(request):
    card = get_card_from_db()

    if card is not None:
        card_data = {
            'description1': card.description1,
            'description2': card.description2,
        }

        response = JsonResponse(card_data, safe=False)

        return response
    else:
        return HttpResponse('Cards not found', status=404)
