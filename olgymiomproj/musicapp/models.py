from django.db import models

# Create your models here.
#  -------- logical flow ----
#  create or find artist with get_or_create
# save artist if created
# create album using the created Artist
# save album
# create song using the created album
# save song


class Artist(models.Model):
    name = models.CharField(max_length=200)
    photo = models.ImageField()
    # albums


class Album(models.Model):
    title = models.CharField(max_length=200)
    artist = models.ForeignKey(
        Artist, related_name="albums", on_delete=models.CASCADE)
    cover = models.ImageField()
    release_date = models.DateField(auto_now_add=True)
    # songs


class Song(models.Model):
    title = models.CharField(max_length=200)
    release_date = models.DateField(auto_now_add=True)
    album = models.ForeignKey(
        Album, related_name="songs", on_delete=models.CASCADE)
