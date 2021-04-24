from flask import Flask
from flask_cors import CORS

# Initialize flask app for the example
app = Flask(__name__)
CORS(app)
app.config['DEBUG'] = True


if __name__ == '__main__':
    app.run()
    