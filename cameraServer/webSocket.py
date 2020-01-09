# -*- coding: utf-8 -*-
from websocket_server import WebsocketServer
import threading
import cv2
import base64
import time
import pymysql
import datetime

camera1=None
frame=cv2.imread("1.jpg", cv2.IMREAD_COLOR)
rtsp_path="rtsp://wttraspberryserver.ddns.net:554/medias2"

# connect to mysql
conn = pymysql.connect(host="localhost", port=3306, user="root", passwd="", db="accountdb")
cursor = conn.cursor()

# Called for every client connecting (after handshake)
def new_client(client, server):
    print("New client connected and was given id %d" % client['id'])
    print("%d client's ip: %s" %(client['id'], client['address'][0]))
    ip = client['address'][0]
    now = datetime.datetime.now()
    cursor.execute("INSERT INTO `pythonclient` (`time`, `ip`, `action`) VALUES ('{}', '{}', 'cam1')".format(now, ip))
    conn.commit()
    # 傳送給所有的連線
    server.send_message_to_all("Hey all, a new client has joined us")

# Called for every client disconnecting
def client_left(client, server):
	print("Client(%d) disconnected" % client['id'])

# Called when a client sends a message
def message_received(client, server, message):
	if len(message) > 200:
		message = message[:200]+'..'
	print("Client(%d) said: %s" % (client['id'], message))
	global camera1
	camera1 = cv2.VideoCapture(message)
	# 傳送給所有的連線
	#server.send_message_to_all(message)
def from_vedio():
	thread1 = threading.Thread(target=vedio_thread1, args=(1,))
#     thread1.setDaemon(True)
	thread1.start()
	thread2 = threading.Thread(target=vedio_thread2, args=(1,))
#     thread1.setDaemon(True)
	thread2.start()
	print('start')
def vedio_thread1(n):
	print('send')
	while True:
		if len(server.clients)>0:
			image = cv2.imencode('.jpg', frame)[1]
			base64_data = base64.b64encode(image)
			s = base64_data.decode()
			#print('data:image/jpeg;base64,%s'%s)
			server.send_message_to_all('data:image/jpeg;base64,%s'%s)
		time.sleep(0.05)
def vedio_thread2(n):
	global camera1
	camera1 = cv2.VideoCapture(rtsp_path)
	global frame
	while True:
		_, img_bgr = camera1.read()
		if img_bgr is None:
			camera1 = cv2.VideoCapture(rtsp_path)
			print('丟失幀') 
		else:
			frame=img_bgr

# Server Port
PORT=8124
# 建立Websocket Server
server = WebsocketServer(PORT,'192.168.0.177')
from_vedio()
# 有裝置連線上了
server.set_fn_new_client(new_client)
# 斷開連線
server.set_fn_client_left(client_left)
# 接收到資訊
server.set_fn_message_received(message_received)
# 開始監聽
server.run_forever()

cursor.close()
conn.close()