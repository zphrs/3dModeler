from flask import Flask, render_template, request, jsonify
import json
import algorithm

app = Flask(__name__)


@app.route("/")
def main():
    return render_template("index.html")

@app.route("/api/v1/getSimilarModels", methods=['POST'])
def getSimilarModels():
	points = json.loads(request.data).get('pts', [0, 0, 0, 1, 1, 1, 2, 2, 2])
	new_points = algorithm.process_points(points)
	return_value = jsonify({'pts': new_points})

	return return_value


	