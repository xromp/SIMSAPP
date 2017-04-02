from flask import Flask, render_template
from jinja2 import Markup

app= Flask(__name__,static_url_path='')

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

@app.errorhandler(404)
def page_not_found(e):
  return render_template('exceptions/page_404.html'),404
# @app.route("/dashboard")
# def dasbboard():
#   return render_template('dashboard-tpl.html')



if __name__ == '__main__':
  app.run(debug=True)