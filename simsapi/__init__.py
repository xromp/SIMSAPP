from flask import Flask,session
from flask_restful import Api

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)
api = Api(app)

connstr =  "mssql+pymssql://user:user@localhost/sims"
engine = create_engine(connstr,deprecate_large_types= True)

try:
  transaction = engine.connect()
  print("connected!")
except:
  print("not connected!")

Session = sessionmaker(bind=engine)

class Mini_func(object):
  """docstring for Mini_func"""

  def get_data(self):
    retval = dict()
    key = ['status', 'data', 'count', 'message']
    value = ['OK', self._retval, len(self._retval), self._message]

    retval = dict(zip(key, value))
    return retval

@app.after_request
def after_request(response):
  # will safe if declared web-app domain
  response.headers.add('Access-Control-Allow-Origin','*')
  response.headers.add('Access-Control-Allow-Headers','Content-type,Authorization')
  response.headers.add('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')

  return response
@app.route('/')
def index():
  return "<p>Hello SimsApi</p>"

import simsapi.person

simsapi.person.add_route(api)