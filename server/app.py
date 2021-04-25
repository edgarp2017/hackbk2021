from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
import os

# Initialize flask app for the example
app = Flask(__name__)
CORS(app)

# Database Setup
project_folder = os.path.dirname(os.path.realpath(__file__))
load_dotenv(os.path.join(project_folder, '.env'))

POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_PW = os.getenv("POSTGRES_PW")
POSTGRES_URL = os.getenv("POSTGRES_URL")
POSTGRES_DB = os.getenv("POSTGRES_DB")

URL = 'postgresql+psycopg2://%s:%s@%s/%s' %(POSTGRES_USER, POSTGRES_PW, POSTGRES_URL, POSTGRES_DB)

db = SQLAlchemy(app)

# Models

class Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)

# config
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True


db.create_all()
db.session.commit()

# routes
@app.route('/api/location', methods = ['GET', 'POST'])
def addLocation():
    if request.method == 'POST':
        name = request.json['name']
        longitude = float(request.json['longitude'])
        latitude = float(request.json['latitude'])

        try:
            location = Location(name=name, longitude=longitude, latitude=latitude)
            db.session.add(location)
            db.session.commit()

            data = {
                "name": location.name,
                "longitude": location.longitude,
                "latitude": location.latitude
            }

            return jsonify(success=True, data=data)
        except Exception as Error:
            print(Error)
            return jsonify(success=False, data=[])
        

    if request.method == 'GET':
        print("GET")
        try:
            locations = Location.query.all()
            print(locations)
            results = []

            for location in locations:
                data = {
                    "name": location.name,
                    "longitude": location.longitude,
                    "latitude": location.latitude
                }
                results.append(data)

            return jsonify(success=True, data=results)
        except Exception as Error:
            print(Error)
            return jsonify(success=False, data=[])
       

@app.route('/api/img', methods = ['GET'])
def getResultImage():
    try:
        if request.files['image']:
            image = request.files['image']
            print("img")
            return jsonify(success=True, data=[])

    except Exception as Error:
        return jsonify(success=False, data="Error")

@app.route('/api/txt', methods = ['GET'])
def getResultText():
    try:
        if request.json['text']:
            text = request.json['text']
            print("txt")
            return jsonify(success=True, data=[])

    except Exception as Error:
        return jsonify(success=False, data="Error")




if __name__ == '__main__':
    app.run()
    