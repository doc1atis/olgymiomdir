from django.views.generic import TemplateView
from django.urls import path, re_path
urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name="index.html"))
]
