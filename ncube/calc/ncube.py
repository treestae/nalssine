from flask import Flask, redirect, url_for

app = Flask(__name__, static_url_path="/", static_folder="./", template_folder="./")

@app.route("/ncube")
def ncube():
    return "<h1>준비중입니다.</h1>"

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/ncube/calc")
def ncube_calc():
    return redirect(url_for("index"))


host_addr = "0.0.0.0"
port_num = "8080"

if __name__ == "__main__":
    app.run(host=host_addr, port=port_num)


