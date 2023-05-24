from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_cors import CORS
import redis

app = Flask(__name__)

CORS(app)

app.config['SECRET_KEY'] = 'bb8658624d1f4b9f89ee2fd80c6c355d'

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Coldkiller-5@localhost/users'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Coldkiller-5@localhost/users?charset=utf8mb4&max_allowed_packet=1073741824'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['SESSION_TYPE'] = "redis"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_USE_SIGNER"] = True
app.config["SESSION_REDIS"] = redis.from_url("redis://127.0.0.1:6379")

db = SQLAlchemy(app)

bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message_category = 'info'

from fyp import routes
