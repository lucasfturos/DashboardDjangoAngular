from django.urls import path 
from rest_framework.urlpatterns import format_suffix_patterns
from usuario.views import ExampleView, CustomAuthToken

urlpatterns = [
    path('profile/', ExampleView.as_view()),
    path('api/auth/', CustomAuthToken.as_view())

]

urlpatterns = format_suffix_patterns(urlpatterns)