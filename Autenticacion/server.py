# -*- coding: utf-8 -*-
"""
Created on Sat Oct 29 16:20:47 2022

@author: jsgc2
"""
import os
from flask import Flask 
from flask import request
from twilio.rest import Client
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
app=Flask(__name__)#instanciando una clase de tipo flask

@app.route('/')
def inicio():
    respuesta = os.environ.get("Prueba")
    return  respuesta

@app.route('/sms')
def sms():
    try:
    # Find your Account SID and Auth Token at twilio.com/console
    # and set the environment variables. See http://twil.io/secure
        account_sid = os.environ['TWILIO_ACCOUNT_SID']
        auth_token = os.environ['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)
        contenido = request.args.get("mensaje")
        destino =request.args.get("telefono")
        message = client.messages \
                        .create(
                             body=contenido,
                             from_='+13023033174',
                             to= '+57' + destino
                         )
        
        print(message.sid)
        return "Enviado correctamente"
    except Exception() as e:
        return  "Error enviando el mensaje"
    
    
@app.route('/e-mail')
def mail():
    destino = request.args.get("correo-destino")
    asunto = request.args.get("asunto")
    mensaje = request.args.get("contenido")
    message = Mail(
        from_email='janodevelopers2022@gmail.com',
        to_emails=destino,
        subject=asunto,
        html_content=mensaje)
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return "Correo electronico enviado"
    except Exception as e:
        return "Error al enviar el correo"
        
if __name__ == '__main__':
    app.run()