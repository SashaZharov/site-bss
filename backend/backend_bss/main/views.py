import os

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from django.http import HttpResponse, JsonResponse

from backend_bss import settings
from main.models import get_card_from_db, PriceList
from .serializers import PriceListSerializer


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
    cards = get_card_from_db()

    if cards:
        cards_data = []

        for card in cards:
            card_data = {
                'description': card.description1,
            }
            cards_data.append(card_data)

        return JsonResponse(cards_data, safe=False)
    else:
        return HttpResponse('Cards not found', status=404)


def price_list_view(request):
    if request.method == 'GET':
        pricelist = PriceList.objects.all()
        serializer = PriceListSerializer(pricelist, many=True)
        return JsonResponse(serializer.data, safe=False)