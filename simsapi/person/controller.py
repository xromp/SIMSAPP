from flask_restful import Resource, reqparse
from .model import Person00

class Person(Resource):
  def __init__(self):
    self.__reqparser = reqparse.RequestParser()
    self.__args = dict()

  def get(self):
    retval = dict()
    status = 200
    args_list = [('person00id', int, 'args', 'None', False)]

    for args in args_list:
      # self.__reqparser.add_argument('User-Agent',location='headers')
      self.__reqparser.add_argument(args[0],type = args[1], location=args[2], default= args[3], required=args[4])

    self.__args =self.__reqparser.parse_args()

    person = Person00(**self.__args)
    result = person.get_data()
    retval = result

    return retval, status

  def post(self):
    retval = dict()
    status = 201

    args_list = [('lname', str, 'json', None, True),
    ('fname', str, 'json', None, True),
    ('mname', str, 'json', None, True)]

    for args in args_list:
      self.__reqparser.add_argument(args[0], type=args[1], location=args[2], default=args[3], required=args[4])
    self.__args = self.__reqparser.parse_args()

    person = Person00()
    person.save(**self.__args)

    result = person.get_data()

    if result['count'] == 0:
      status = 400
    retval = result

    return retval, status