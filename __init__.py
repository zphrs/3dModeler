from flask import Flask, render_template, request, jsonify
import json, numpy as np
app = Flask(__name__)
@app.route("/")
def main():
    return render_template("index.html")

@app.route("/api/v1/getSimilarModels", methods=['GET'])
def getSimilarModels():
	points = json.loads(request.args.get('pts', default='[0, 0, 0, 1, 1, 1]'))
	output = np.array()

	return output.tolist()



def normalizePts(npArr):

	return npArr

def getModelsInDatabase(npArr):
	listOfModels = np.array()
	return listOfModels

def scoreModel(model, input):
	score = 0

	return score

def compareModels(listOfModels, npArr):

	# call score model for each model in list and store score + model
	# sort the models based on score
	# return score
	pass

app.run(debug=True)