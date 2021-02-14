#imports / lab code

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import environ
import hashlib
import random
import string

self.debug = debug
self.app = Flask(__name__)
self.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
self.app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
self.app.secret_key = environ.get('SECRET_KEY')
postgres_password = environ.get('PASSWORD')
self.web_url = environ.get('WEB_URL')
db.init_app(self.app)

with self.app.app_context():
        song_dict_list = []
        album_query_string = "', '".join(albums.keys()) # will create list like "id1', 'id2', 'id3"
        query = "SELECT tracks.*, \"albumTracks\".\"albumId\" FROM tracks " + \
                "LEFT JOIN \"albumTracks\" ON tracks.\"id\" = \"albumTracks\".\"trackId\"" + \
                "WHERE \"albumTracks\".\"albumId\" IN ('" + album_query_string + "') " + \
                "LIMIT " + str(self.DB_LIMIT) + ";"

        songs = db.engine.execute(query)



# original config, includes password

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:'+ postgres_password + '@localhost/FlaskAWS'

db = SQLAlchemy(app)


class Point(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    x = db.Column(db.Integer())
    y = db.Column(db.Integer())
    z = db.Column(db.Integer())


    
