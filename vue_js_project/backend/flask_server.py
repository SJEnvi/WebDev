from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
import random

app = Flask(__name__)
CORS(app)
# https://sekurak.pl/czym-jest-cors-cross-origin-resource-sharing-i-jak-wplywa-na-bezpieczenstwo/

@app.route("/randomMovie", methods=["GET"])
def randomMovie():
    movie = random.choice(documents)
    movie.pop("_id", None)
    resp = jsonify(movie)
    return resp

@app.route("/prediction", methods=["POST"])
def postPrediction():
    data = request.get_json()
    predictionCollection.insert_one(data)
    resp = jsonify(success=True)
    return resp

mongoClient = MongoClient('mongodb://localhost:27017/')

# movie dataset
movieDatabase = mongoClient["movieDatabase"]
movieCollection = movieDatabase["movieCollection"]
documents = [movie for movie in movieCollection.find()]

# prediction dataset
predictionCollection = movieDatabase["predictionCollection"]