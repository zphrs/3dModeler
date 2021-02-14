from flask import Flask, render_template, request, jsonify
from . import algorithm
from time import sleep

app = Flask(__name__)


@app.route("/")
def main():
    return render_template("index.html")

@app.route("/api/v1/getSimilarModels", methods=['POST'])
def getSimilarModels():
    #NOTE for debugging only, remember to remove
    points = request.get_json().get('pts', [])
    new_points = algorithm.process_points(points)
    if new_points:
        new_points = new_points.tolist()
    return_value = jsonify({'pts': new_points})

    return return_value

