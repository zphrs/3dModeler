from flask import Flask, render_template, request, jsonify
import json, numpy as np
app = Flask(__name__)
@app.route("/")
def main():
    return render_template("test.html")

@app.route("/api/v1/getSimilarModels", methods=['GET'])
def getSimilarModels():
	points = json.loads(request.args.get('pts', default='[0, 0, 0, 1, 1, 1]'))
	