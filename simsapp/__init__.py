from flask import Flask, render_template, jsonify, request
from jinja2 import Markup
from flask_restful import Api

app = Flask(__name__,static_url_path='')
api = Api(app)
app.secret_key = 'secret_key'
app.config.from_object('config')
# @app.context_processor
# def override_url_for():
#   return dict(url_for=dated_url_for)

# def dated_url_for(endpoint, **values):
#   if endpoint == 'static':
#     filename = values.get('filename', None)
#     if filename:
#       file_path = os.path.join(app.root_path,
#         endpoint, filename)
#       values['q'] = int(os.stat(file_path).st_mtime)
#   return url_for(endpoint, **values)

@app.route("/dashboard")
def index():
  return render_template('dashboard/dashboard-tpl.html')

@app.route("/enrollment")
def enrollment():
  return render_template('enrollment/enrollment-tpl.html')

@app.route("/student")
def student():
  return render_template('student/student-tpl.html')

@app.route("/student/student-create")
def studentcreate():
  return render_template('student/student-tpl.html')

@app.route("/people/create")
def peoplecreate():
  return render_template('people/people.html')

@app.route("/api/people/create/person", methods = ['POST'])
def api():
  if request.method == 'POST':
    data = request.json
  return jsonify(
    status = 'success',
    data = {'data': data}
    )

# @app.route('/student/student-create-wizard/<path:path>')
# def send_js(path):
#     return app.send_static_file('student/student-create-wizard/'+path)

@app.errorhandler(404)
def page_not_found(e):
  return render_template('exceptions/page_404.html'),404

# @app.route("/dashboard")
# def dasbboard():
#   return render_template('dashboard-tpl.html')

