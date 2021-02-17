from enum import unique
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import csv
from pathlib import Path

script_location = Path(__file__).absolute().parent
file_location = script_location / 'secret.csv'
myDict = {}
with open(file_location, mode='r') as data:
	for line in csv.DictReader(data):
		myDict = line

db = SQLAlchemy()

class Obj(db.Model):
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	length = db.Column(db.Integer, nullable=False)
	points = db.Column(db.ARRAY(db.Float), unique=True)
print(myDict)
DATABASE_URI = myDict['DATABASE_URL']
engine = create_engine(DATABASE_URI)
# db.Model.metadata.drop_all(engine)
# db.Model.metadata.create_all(engine)