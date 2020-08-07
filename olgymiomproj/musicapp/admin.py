from django.contrib import admin

# Register your models here.
from usersapp.models import AppUser
from musicapp.models import Artist, Album, Song
admin.site.register(AppUser)
admin.site.register(Artist)
admin.site.register(Album)
admin.site.register(Song)
