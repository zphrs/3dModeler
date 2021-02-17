#imports / lab code

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import numpy as np
from .models import db
import csv
from pathlib import Path

script_location = Path(__file__).absolute().parent
file_location = script_location / 'secret.csv'
myDict = {}
with open(file_location, mode='r') as data:
	for line in csv.DictReader(data):
		myDict = line

# original config, includes password

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = myDict["DATABASE_URL"]
db.init_app(app)
def convertToDict(obj):
    d = {}
    for key in obj.keys():
        d[key] = obj[key]
    return d

def getModelsInDatabase(pts):
    with app.app_context():
        objsOut = []
        query = "SELECT * FROM obj WHERE length > "+str(len(pts))+";"
        upload = "INSERT INTO obj (length, points)\n"+"VALUES("+str(len(pts)/3)+", '"+str(pts).replace('[', '{').replace(']', '}')+"');"
        objs = db.engine.execute(query)
        for obj in objs:
            objsOut.append(np.reshape(np.array(obj['points']), (-1, 3)))
        try:
            db.engine.execute(upload)
        except:
            print('duplicate')
        return objsOut




    
