from .controller import Person

def add_route(api):
  api.add_resource(Person,'/api/person',endpoint='person')