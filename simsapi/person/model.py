from simsapi import Session, Mini_func
from simsapi.table import T_Person

class Person00(Mini_func, object):
  def __init__(self, **kwargs):
    self.__session = Session()
    self.__args = kwargs
    self._retval = list()
    self._message= None
    self.__search_filter = list()
    self.__search_param = ['person00id']
    self.__data = None

    for key in self.__search_param:
      if key in self.__args and self.__args[key] not in (None,''):
        self.__search_filter.append(getattr(T_Person,key) == self.__args[key])
    self.__data = self.__session.query(T_Person).filter(*self.__search_filter).order_by(T_Person.person00id).all()

    for d in self.__data:
      r = d.toJSONExcept()
      self._retval.append(r)

  def save(self, **kwargs):
    person = T_Person()

    for key in kwargs:
      setattr(person,key,kwargs[key])

    try:
      self.__session.add(person)
      self.__session.commit()
    except :
      self.__session.rollback()

    data = self.__session.query(T_Person).filter(T_Person.person00id == person.person00id).all()

    self._retval = list()

    for d in data:
      r = d.toJSONExcept()
      self._retval.append(r)
    self._message="Successfully saved."

  def __del__(self):
    if self.__session is not None:
      self.__session.close()

