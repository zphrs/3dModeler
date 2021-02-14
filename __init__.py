from flask import Flask, render_template, request, jsonify
import json, numpy as np
app = Flask(__name__)
@app.route("/")
def main():
    return render_template("index.html")

@app.route("/api/v1/getSimilarModels", methods=['POST'])
def getSimilarModels():
	points = json.loads(request.args.get('pts', default='[0, 0, 0, 1, 1, 1]'))
	output = np.array()
	
	return output.tolist()

@app.route("/api/v1/debug/getSimilarModels", methods=['POST'])
def getSimModelsTemp():
	return {"objs":[[0, 0, 0, 1, 1, 1, 2, 2, 2], [0, 0, 0, 1, 1, 1, 2, 2, 1]]};

def normalizePts(npArr):

	return npArr

def getModelsInDatabase(npArr):
	listOfModels = np.array()
	return listOfModels

def scoreModel(model, input):
	score = 0

	return score

def compareModels(listOfModels, npArr):
	''
	# call score model for each model in list and store score + model
	# sort the models based on score
	# return score
	pass

app.run(debug=True)