from django.views.generic import TemplateView
from django.urls import path
urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    path('register/', TemplateView.as_view(template_name="index.html")),
    path('player/', TemplateView.as_view(template_name="index.html")),
]
