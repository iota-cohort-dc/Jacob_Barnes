from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'burrito'
import random

@app.route('/')

def index():
   if 'randomNum' in session:
       pass
   else:
   		session['randomNum'] = random.randrange(0, 101)

   print session['randomNum']
   return render_template('index.html')

@app.route('/num', methods=['POST'])

def num():
   if int(request.form['number']) < session['randomNum']:
    	lower = 'TOO LOW!'
    	print lower
    	return render_template('index.html', toolow = lower)

   elif int(request.form['number']) > session['randomNum']:
    	higher = 'TOO HIGH!'
    	print higher
    	return render_template('index.html', toohigh = higher)

   elif int(request.form['number']) == session['randomNum']:
    	bingo = 'YOU GOT IT!'
    	print bingo
    	session.pop('randomNum')
    	return render_template('win.html', gotit = bingo)

@app.route('/win', methods=['POST'])

def win():
	return redirect('/')

app.run(debug=True)
