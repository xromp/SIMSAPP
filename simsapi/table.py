from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, func, Date
from decimal import Decimal
import datetime

Base = declarative_base()

class GenericBase(object):
  def  as_dict(self):
    return ({c.name:getattr(self, c.name) for c in self.__table__.columns})

  def toJSONExcept(self, *except_fields):
    retval = {}
    tabledic = self.as_dict()
    for k in tabledic:
      if k in except_fields:
        continue
      if type(tabledic[k]) in [datetime.datetime, datetime.date]:
        tabledic[k] = tabledic[k].strftime('%m/%d/%y %H:%M')
      elif  type(tabledic[k]) is Decimal:
        tabledic[k] = float(tabledic[k])

      retval[k] = tabledic[k]
    return retval

class T_Person(GenericBase, Base):
  """docstring for T_Person"""
  __tablename__ ='person00'
  person00id = Column(Integer, primary_key = True)
  lname = Column(String(100))
  fname = Column(String(100))
  mname = Column(String(100))