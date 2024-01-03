(function(){
  var $ = function (id) {
  	id = id.replace(/\\s+/g, "");
  	var x;
  	var y;
  	var draggable = false;
  	var dragging = false;
  	var yr = 0;
  	var xr = 0;
  
  	function collectXY(e) {
  		if (draggable) {
  			dragging = true;
  			yr = e.y - returnObject.y;
  			xr = e.x - returnObject.x
  		}
  	}
  
  	function drag(e) {
  		if (dragging && draggable) {
  			returnObject.y = e.y - yr;
  			returnObject.x = e.x - xr
  		}
  	}
  	var returnObject = {
  		"delete": function () {
  			deleteElement(id)
  		},
  		get elt() {
  			return id
  		},
  		get text() {
  			return getText(id)
  		},
  		set text(val) {
  			setText(id, val)
  		},
  		get num() {
  			return getNumber(id)
  		},
  		set num(v) {
  			setNumber(id, v)
  		},
  		get fontSize() {
  			return getProperty(id, "font-size")
  		},
  		set fontSize(v) {
  			setProperty(id, "font-size", v)
  		},
  		get fontFamily() {
  			return getProperty(id, "font-family")
  		},
  		set fontFamily(v) {
  			setProperty(id, "font-family", v)
  		},
  		get textAlign() {
  			return getProperty(id, "text-align")
  		},
  		set textAlign(v) {
  			setProperty(id, "text-align", v)
  		},
  		get textColor() {
  			return getProperty(id, "text-color")
  		},
  		set textColor(v) {
  			setProperty(id, "text-color", v)
  		},
  		get placeholder() {
  			return getProperty(id, "placeholder")
  		},
  		set placeholder(v) {
  			setProperty(id, "placeholder", v)
  		},
  		get backgroundColor() {
  			return getProperty(id, "background-color")
  		},
  		set backgroundColor(v) {
  			setProperty(id, "background-color", v)
  		},
  		get image() {
  			return getProperty(id, "image")
  		},
  		set image(v) {
  			setProperty(id, "image", v)
  		},
  		get fit() {
  			return getProperty(id, "fit")
  		},
  		set fit(v) {
  			setProperty(id, "fit", v)
  		},
  		get iconColor() {
  			return getProperty(id, "icon-color")
  		},
  		set iconColor(v) {
  			setProperty(id, "icon-color", v)
  		},
  		get borderColor() {
  			return getProperty(id, "border-color")
  		},
  		set borderColor(v) {
  			setProperty(id, "border-color", v)
  		},
  		get borderRadius() {
  			return getProperty(id, "border-radius")
  		},
  		set borderRadius(v) {
  			setProperty(id, "border-radius", v)
  		},
  		get borderWidth() {
  			return getProperty(id, "border-width")
  		},
  		set borderWidth(v) {
  			setProperty(id, "border-width", v)
  		},
  		get height() {
  			return getProperty(id, "height")
  		},
  		set height(v) {
  			setProperty(id, "height", v)
  		},
  		get width() {
  			return getProperty(id, "width")
  		},
  		set width(v) {
  			setProperty(id, "width", v)
  		},
  		get size() {
  			return [getProperty(id, "height"), getProperty(id, "width")]
  		},
  		set size(v) {
  			setProperty(id, "height", v[0]);
  			setProperty(id, "width", v[1])
  		},
  		get x() {
  			return getProperty(id, "x")
  		},
  		set x(v) {
  			setProperty(id, "x", v)
  		},
  		get y() {
  			return getProperty(id, "y")
  		},
  		set y(v) {
  			setProperty(id, "y", v)
  		},
  		get position() {
  			return [getProperty(id, "x"), getProperty(id, "y")]
  		},
  		set position(v) {
  			returnObject.x = v[0];
  			returnObject.y = v[1]
  		},
  		get value() {
  			return getProperty(id, "value")
  		},
  		set value(v) {
  			setProperty(id, "value", v)
  		},
  		get min() {
  			return getProperty(id, "min")
  		},
  		set min(v) {
  			setProperty(id, "min", v)
  		},
  		get max() {
  			return getProperty(id, "max")
  		},
  		set max(v) {
  			setProperty(id, "max", v)
  		},
  		get range() {
  			return [getProperty(id, "min"), getProperty(id, "max")]
  		},
  		set range(v) {
  			setProperty(id, "min", v[0]);
  			setProperty(id, "max", v[1])
  		},
  		get step() {
  			return getProperty(id, "step")
  		},
  		set step(v) {
  			setProperty(id, "step", v)
  		},
  		get hidden() {
  			return getProperty(id, "hidden")
  		},
  		set hidden(v) {
  			setProperty(id, "hidden", v)
  		},
  		get groupId() {
  			return getProperty(id, "group-id")
  		},
  		set groupId(v) {
  			setProperty(id, "group-id", v)
  		},
  		get checked() {
  			return getProperty(id, "checked")
  		},
  		set checked(v) {
  			setProperty(id, "checked", v)
  		},
  		get readonly() {
  			return getProperty(id, "readonly")
  		},
  		set readonly(v) {
  			setProperty(id, "readonly", v)
  		},
  		get options() {
  			return getProperty(id, "options")
  		},
  		set options(v) {
  			setProperty(id, "options", v)
  		},
  		get index() {
  			return getProperty(id, "index")
  		},
  		set index(v) {
  			setProperty(id, "index", v)
  		},
  		set parent(v) {
  			setParent(id, v)
  		},
  		set children(v) {
  			setParent(v, id)
  		},
  		set html(v) {
  			innerHTML(id, v)
  		},
  		set CSS(v) {
  			setStyle(id, v)
  		},
  		scrollable: {
  			x: false,
  			y: false
  		},
  		get scrollX() {
  			return this.scrollable
  		},
  		set scrollX(v) {
  			if (v === true) {
  				this.scrollable.x = true;
  				setStyle(id, "overflow-x:scroll")
  			} else if (v === false) {
  				this.scrollable.x = false;
  				setStyle(id, "overflow-x:none")
  			}
  		},
  		get scrollY() {
  			return this.scrollable
  		},
  		set scrollY(v) {
  			if (v === true) {
  				this.scrollable.y = true;
  				setStyle(id, "overflow-y:scroll")
  			} else if (v === false) {
  				this.scrollable.y = false;
  				setStyle(id, "overflow-y:none")
  			}
  		},
  		hide: function (ms) {
  			if (!ms) {
  				hideElement(id)
  			} else {
  				setTimeout(function () {
  					hideElement(id)
  				}, ms)
  			}
  		},
  		show: function (ms) {
  			if (!ms) {
  				showElement(id)
  			} else {
  				setTimeout(function () {
  					showElement(id)
  				}, ms)
  			}
  		},
  		set sound(v) {
  			onEvent(id, "click", function () {
  				playSound(v)
  			})
  		},
  		set speech(v) {
  			onEvent(id, "click", function () {
  				playSpeech(v)
  			})
  		},
  		set click(v) {
  			onEvent(id, "click", function (event) {
  				v(event)
  			})
  		},
  		set change(v) {
  			onEvent(id, "change", function (event) {
  				v(event)
  			})
  		},
  		set keyup(v) {
  			onEvent(id, "keyup", function (event) {
  				v(event)
  			})
  		},
  		set keydown(v) {
  			onEvent(id, "keydown", function (event) {
  				v(event)
  			})
  		},
  		set keypress(v) {
  			onEvent(id, "keypress", function (event) {
  				v(event)
  			})
  		},
  		set mousemove(v) {
  			onEvent(id, "mousemove", function (event) {
  				v(event)
  			})
  		},
  		set mousedown(v) {
  			onEvent(id, "mousedown", function (event) {
  				v(event)
  			})
  		},
  		set mouseup(v) {
  			onEvent(id, "mouseup", function (event) {
  				v(event)
  			})
  		},
  		set mouseover(v) {
  			onEvent(id, "mouseover", function (event) {
  				v(event)
  			})
  		},
  		set mouseout(v) {
  			onEvent(id, "mouseout", function (event) {
  				v(event)
  			})
  		},
  		set input(v) {
  			onEvent(id, "input", function (event) {
  				v(event)
  			})
  		},
  		set hover(v) {
  			this.ini = {};
  			var ini = this.ini;
  			for (var prop in v) {
  				ini[prop] = this[prop]
  			}
  			this.mouseover = function () {
  				for (var prop in v) {
  					$(id)[prop] = v[prop]
  				}
  			};
  			this.mouseout = function () {
  				for (var prop in ini) {
  					$(id)[prop] = ini[prop]
  				}
  			}
  		},
  		drop: function () {},
  		set drag(elt) {
  			if (elt === false) {
  				draggable = false
  			} else {
  				draggable = true;
  				$(elt).mousemove = function (e) {
  					drag(e)
  				};
  				$(elt).mouseup = function (e) {
  					if (dragging === true && !(e.y === y && e.x === x)) returnObject.drop(e);
  					dragging = false
  				}
  			}
  		},
  		dblClick: function () {},
  		collides: function (elt, offset) {
  			var offsetX;
  			var offsetY;
  			if (offset) {
  				if (typeof offset === "number") {
  					offsetX = offset;
  					offsetY = offset
  				} else {
  					offsetX = offset[0];
  					offsetY = offset[1]
  				}
  			} else {
  				offsetX = 0;
  				offsetY = 0
  			}
  			var I1 = $(id);
  			var I2 = $(elt);
  			if (I1.y + I1.height + offsetY >= I2.y && I1.y <= I2.y + I2.height + offsetY) {
  				if (I1.x + I1.width + offsetX >= I2.x && I1.x <= I2.x + I2.width + offsetX) {
  					return true
  				}
  			} else {
  				return false
  			}
  		}
  	};
  	returnObject.mousedown = function (e) {
  		collectXY(e);
  		x = e.x;
  		y = e.y
  	};
  	var c = 0;
  	returnObject.click = function (e) {
  		c++;
  		if (c === 2) {
  			returnObject.dblClick(e)
  		}
  		setTimeout(function () {
  			c = 0
  		}, 250)
  	};
  	return returnObject
  };
  var Template = function (props) {
  	this.props = {};
  	var value = this.props;
  	for (var p in props) {
  		value[p] = props[p]
  	}
  	this.Apply = function () {
  		var array;
  		if (Array.isArray(arguments[0])) array = arguments[0];
  		else array = arguments;
  		for (var prop in value) {
  			for (var i = 0; i < array.length; i++) {
  				$(array[i])[prop] = value[prop]
  			}
  		}
  	}
  }

  return {$:$,Template:Template};
  
})();
