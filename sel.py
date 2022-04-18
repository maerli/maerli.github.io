import mouse
import math
a = 0
import threading
def set_interval(func,time):
	e = threading.Event()
	while not e.wait(time):
		func()
x,y = mouse.get_position()

def doit():
	global x,y
	x,y = mouse.get_position()
mouse.on_click(doit)

def foo():
	global a
	mouse.move(x+ 5*math.sin(a), y + 5*math.cos(a), absolute=True, duration=0.1)
	a = a + 0.1
set_interval(foo, 1)