from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path, include
from produto import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(urls)),
]
