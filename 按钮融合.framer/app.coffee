container.contrast = 3000
container.backgroundColor = "white"
button.blur = 5
button2.blur = 5
rect.draggable = true
rect.blur = 5

buttonArray = []
for i in [0..2]
	subButton = new Layer
		parent: container
	subButton.props = button2.props
	subButton.states.a =
		y: container.height-84-(i+1)*65
		options: 
			time: 0.5
			curve: Spring(tension: 300)
	subButton.states.animationOptions =
		time:0.2
		curve:Bezier.easeIn
	buttonArray[i] = subButton


button.onTap ->
	for btn  in buttonArray
		btn.stateCycle()
