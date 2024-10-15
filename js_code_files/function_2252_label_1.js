Sidebar.prototype.addMiscPalette = function(expand)
{
	var sb = this;
	var lineTags = 'line lines connector connectors connection connections arrow arrows '
	this.setCurrentSearchEntryLibrary('general', 'misc');

	var fns = [
   	 	this.createVertexTemplateEntry('text;strokeColor=none;fillColor=none;html=1;fontSize=24;fontStyle=1;verticalAlign=middle;align=center;', 100, 40, 'Title', 'Title', null, null, 'text heading title'),
	 	this.createVertexTemplateEntry('text;strokeColor=none;fillColor=none;html=1;whiteSpace=wrap;verticalAlign=middle;overflow=hidden;', 100, 80,
 			'<ul><li>Value 1</li><li>Value 2</li><li>Value 3</li></ul>', 'Unordered List'),
	 	this.createVertexTemplateEntry('text;strokeColor=none;fillColor=none;html=1;whiteSpace=wrap;verticalAlign=middle;overflow=hidden;', 100, 80,
 			'<ol><li>Value 1</li><li>Value 2</li><li>Value 3</li></ol>', 'Ordered List'),
 		this.addDataEntry('table', 180, 120, 'Table 1', '7ZjBTuMwEIafJteVnVDoXpuycGAvsC9g6mltyfFE9kAann7txN2qqIgU0aCllRJpZjxO7G9i/3KyoqzWN07U6jdKMFlxnRWlQ6TeqtYlGJPlTMusmGd5zsKd5b/eaOVdK6uFA0tDOuR9h2dhnqCP9AFPrUkBr0QdTRKPMTRTVIVhznkwG6UJHmqxiO1NmESIeRKOHvRLDLHgL9CS0BZc6rNAY0TtdfewPkNpI+9Ei0+0ec3Gm6XhgSNYvznFLpTmdwNYAbk2pDRakkoZ0x4DU6BXatMtsWHC94HVv75bYsFI0PYDLA4EeI9NZIhOv0QwJjF4Tc03ujLCwi0I+So0Q9mmEGGdLANLSuYjEmGVHJemy/aSlw7rP8KtYJOy1MaUaDAWy6KN5a5RW+oATWbhCshK9mOSTcLMyuDzrR+umO6oROvJhaLHx4Lw1IAfXMz8Y8W8+IRaXgyvZRgxaWHuYUHCroasi7AObMze0t8D+7CCYkC5NPGDmistJdihjIt3GV8eCfHkxBGvd/GOQPzyTHxnsx8B+dVZE0bRhHa3ZGNIxPRUVtPVl0nEzxNHPL5EcHZGPrZGcH4WiTFFYjqiSPADTtX/93ri7x+9j7aADjh5f0/IXyAU3+GE3O1L4K6fod+e+CfV4YjqEdztL8GubeeP4V8='),
 		this.addDataEntry('table', 180, 120, 'Table 2', '7ZhRb5swEMc/Da+TDSFJX0O27qF7aae9u8EJlowP2ZcR+ulng1maJlbTaaEPIBHpfL5z8O/v0wlHSVYe7jWrih+QcxklX6Mk0wDYWeUh41JGMRF5lKyjOCb2F8XfArO0nSUV01zhNQlxl/CbyT3vPJ3DYCO9wxSsciayZ+daFVja11xTa9aFQP5UsY2br+0mrM8g0/gkXpyL2PEGFDKhuPY5G5CSVUa0i3URhZD5A2tgj/3f9CMXvS/Vg803PlpD/Xro359r5Icgg9blAdxzKDnqxobUIsfCRyw7TqTgYlf0aR4eYaZz7P7mHpFaw1O9TDj5IOFHqB1k0OLFkZN+n2+xmlqUkin+nbP8jWsFeeNdCJW3JN+iN58BEcoep98uuShNrqH6yfSO9yFbIWUGEpyaCpQ7DxUIhS2gdGUfiywjX9IotTvL7Jgex/Zx4RozUAa1PRVuWc4M1tzgtWLG/ybm7D9oOTvT8ldrxoQGRbWvjoLJR75BpnbXVJCtGOWijzJcoP4xZcEy3Up3staFyHOu3KL2ePkDReNr4Sfvwp/fiH0aZB8uqFGwP5xyH0CKeVCKZJLidd8YQIvF1F4GaS/NqWRDdJtlsMxmIymzxad1m7sg+3Tc7IfvNpQEtZhPWgzcbiid+s2Q/WY5YL+h55cBfaEtRlJo9P2bgptV1vlFQU9/OXL6n9Bzwl/6d5MYN246dni8AG3nTu5H/wA='),
		this.addDataEntry('table title', 180, 150, 'Table with Title 1', '7ZjBbtswDEC/xtfBsuumu8bZusN2afoDasxYAmjJkNk57tePkpVlXdMlBRYXaAI4AEmRcvgogpCTvGw2t0626oetAJP8S5KXzloapWZTAmKSpbpK8kWSZSn/kuzrK6sirKatdGDomIBsDPgp8RFGy718QBitHQ0YrZ2SrRcprObzjqSjpX7ytjxlw8oaktqAY4MIOqJsOx3cF8FDaay+y8E+0najrTZfc/Qyvs1HS9S1YXnFafgt5/FvgiPYvJpqMMU8b8E2QG5gl15XpKLHzYgjVaBrtQ0rolF2o6H+Hbsjx0KEtx9k/gLkvxne2Z7TUtbpJ08OI6Q/uQa91w1KA99AVn+Z5rYaoolsGyWENUXxwRLZJiouppvuLU3lbHsvXQ1bl7VGLC1aX01jja94a7WhAKiY88PIyvRTkRScWcm62On8eHdHpTUdOT4VfluQHfXQ0bHFzPYXc4i4Y8kO1fbqP5T26vjScgKkJd7BiqSpQ6coajCe6l5pgmUrV961554f+8Z4710x9rB/W30tk12jP18LpasKzLHI84P9c30ixMWZI948xzsB8esL8RCQTYd8dhkRU46I2YQj4uZcumn2biPi85kjnn5EiPSCfOoZIcRlSEw5JISYcEqIl7ftD9pQ4vBV/GQd9Iab+MeE/A6T4myuyAeYn3BUsLr7LBjWnn01/AU='),
		this.addDataEntry('table title', 180, 120, 'Table with Title 2', '7VhNc5swEP01XDt8xG58NU7Tg3uJM70rZg2aERIjbQLk13cl5DopJnHTYnPIDJ7ZT5l9T/sOBElaNreaVcUPlYEIkpsgSbVS2Fllk4IQQRzyLEhWQRyH9AvibwPZyGXDimmQeEpD3DU8MfEIXeSePQjoogZb4aOmYJU10WWTpUGmccOfbSwJKbBVEhmXoCkQOV8IVhnuyleuouAiW7NWPeL+oL233PEGsjtVG9+tVb2mw4xv3dHhG/8yNu1fGjRCMzi4C/mpb0GVgLqlkppnWPiK6w6csACeF/s2j1jITBfIf/cecCTDQ3kc1qQH69uI0ug0VqE0f7Y4Cj/3S5SdX/NSMAnfgWV/hJYqa30IVeUtATv05oNCVKV3tB83PEpUplV1z3QO+5IdFyJVQllupZKW/0pxiQ6g2ZIegiwNv8yCGU2Wkh8dfHpsucZUSYOa7og9FpjBGgyeSmZ8nMzWw+0pe4/b5D9Qe9WjNhrkliZAzsQdbJHJ3C1OgaXwt7guOMKmYltbWpMEdGskbfWBjSPg/x3BiqDdCXvBVgXPMpB7+kDfPEHH4slLlby7VFcj4T7r4f7TmXE4cfyZ4Dlhvupql4b+kMt83XXOBwj6FzKa10S8XIqxyJl/6t059W5+Rr372qN2mNtJ7NuH12l+MW27HtS2iWM9nrYNkHEBbVt8ats5tW1xRm2Lwh63ybQX7sP7tLiYuEXRoLpNHOzx1G2AjfHVjdzDxwWXe/Xt4Rc='),
		this.addDataEntry('crossfunctional cross-functional cross functional flowchart swimlane table', 400, 400, 'Cross-Functional Flowchart', '7ZjRatswFIafxpcDy87a7nJJlvZig9HuBVT7JBLIOkZSGrtPPymS2622Gwc6z6WGXBz9HBnxfxz+cKJ0VVTXipbsB+YgovRblMTul64Uonk+N2pRrUAIW/M8StdR4vQkSjYDOsmxMy6pAmnOvZz4yw9U7MEr9oFaf9rsZWY4SuqaNwIPGaPK+GZtahGaNaOlKw29d9IyY1zk32mNe9OozWmpjf3CHX90/YvYNaMQtNT8eHXtFAXZXmn+ALegfaNToSqpzMNhi9LchQcQew7vB2Wg6vXjKL0w49mSa8ACjKrt+cBzw/ydRexdjBnwHTMvRKq9sHu62224FYPnp1mkLRZfM4PKSuR142/xYJ1gqPijdcci81a1DNcHXggq4QZoY2cjLTGvg2SwDJWArQnlPRqDRYMpGOLqXGH5i6odNMKWC7FCYd+driVKGBV0MhR03fD03zjFnST/kPuixf0noxq6uQdeg2n+aaMfOikhC/PaB+w/jmo6lGDVS/AJ1mgEP/cSTGaCpwiSiykgvOhFmM4ITyFMrqaA8LI3PzumcM7Pt8jPrtkdP0CvWuAnMLLjTuzle4zNLzO3c7lNIyxJPJM7l9w0MpKQ3pDs+J8zh+RbhGQX+fFDkrRXPR9uZsngRdCUYpK0F0MzuXcSlO3dzoxuUkl5FJudfOj4a3H/Gw=='),
		
 		this.addDataEntry('table', 280, 160, 'Table', '7Zpdc+IgFIZ/Te4D+JXLaj/2YvfGdvYeDRqmGDIEW+2vX5KAWjEWY7RNXGc6Q46Bwvtw8oYzemi0WD0JnER/eEiYhx48NBKcy6K1WI0IYx70aeihew9CX/158LHkW5B/6ydYkFi6dIBFhzfMlqSI3KUpkWkRTuWa6fA0oiz8jdd8mY0r8YQRczUUZLoUKX0jY5LSj6yDr6KpFPyVjDjjIh8CBYPJTM0QDWeUsZ34XX8UdGDWI8Ihf1fB7CY9MSIkWZUuLg/plT0RviBSrNUt7zSUkV7goBDAjwidR6ZbTwdxWgTmm75brVRDy3VYOmRppOafEKPOOFvJMOKCfvBYYrZRBQv5vKPSO10wHJNfBId7oSEP1zokeaJbjMykbk64lHyhL4ReXdYOBU9esJgTE5hyxnCS0gkz//YwMrJKcGymMVPTftaLs3nSOCKCSpvmLP+4AoTVACJ0Pr+OtfVfqFSrhT6wdz+PYzLNuR4V0FGjzY7HjM5jFZsqQYjYEx3o652Oj/nHVVz0pbgBOk1bPdg40yKe52KdOBpmaqExlmp3L+MwtYBt5unEsFvKELab4eqz4rsQOrUidRitXqS9UqT2A7eNSMGgbzNteJr2Lab/vfNi3rn+TPRLK4XnW+nA4vs3b17aSrdRK2OdFOxXM8gjilXIvL3R6s28oJTMZQ3yQmROtL3qoBxGqxcU8EtJXdb3LkvK2c0alFMA3LKdAXc7e7h7hPeoHjvrdR3tDJxvZ8Cuiphc7FwpF50UA1+XPw5mxxGJKuTa3mg15xoqRdFtAooTDas6GYfRaiZj108MmV6DyDgbVJOSxi6L3JBBfdN5K+g5GlQNpUtgF0lM7vWvlHv7ild7eSx2aqtLlMAufhhWg1awam8pEpTXNYI2oWtjyRHYlY8b8sBvOqQBU2+6xikNlldMTDHlh7yBBtVMrkFvnNAuiWxYXKsEfBaL9p7TzHPvEBr7kfhz0bTgoKYut7/sKW7f/eHPPw=='),
		
 		this.addDataEntry('table', 180, 140, 'Table', '7ZjJcuIwEIafxncvhOWKs8xhciGpuQu7sVVpq12yCHaefmQsJSHGwUAOmEpRVEmtBfX/qWlJThBm5YNkefpIMaAT3DlBKIlUU8rKEBAd3+WxE9w6vu/qr+Pfd7R621Y3ZxKE6jPAbwa8MlxDY2kMharQGKKUY/yXVbSuZ1RsiWBrcwnRWhb8FRZQ8Ld6gKutRcpi2pjKiiOGhCR1XZCAul1JegFrdPwgdOuPbjGrAamg7PRoazLuPABloGSlu2x4rFLTY9p47abAk9QOGxkjKxpD8j72QyBdMBrt1ys4rJf2Pger1KLWYZ6S5G8kFEOrkGJSPX1SbMMzZAL+AIu/mOYUV8akKDclhJUyxSUpRZmpSONuXY4l5c9MJmANESGyvOBLtD+7Hx+UORN2GSu97CfjXAfOXtD806CNJuczG7WY/dsWfddrb3YSAqItum812t3CRog92jDkidDVSAsBsq9YwUGxxkdqZSZb1L6JBOH42RhqBwRTekOuRVy0ALyvsxeTm04me/6ALplJuavgFSEadyIKBonI86+P0eQ3+5yTfapdRgeT0fj8ZDTtjKrRhUbV5LRk9I1WJ0TRl9l+NopmnUxuhsXkyGQ0IESe28loPEhGvbPRkCC1z9O/6ej4dDQLeqajH7gbee0HABtX7bPFZcSVd/j+P/Rjndd+ZrBUpgOjcr33I6/7XWE2TEhXcEPS1Y/H06b757fV/w=='),
		
 		this.addDataEntry('table', 180, 140, 'Table', '7ZhLc+IwDMc/Te55UB5X2G176F7ozt5NIhLPKlbGMSXpp1+H2H0Fl0DZGcL0wIys2I71/8XIlhct8upOsiL7RQmgF/30ooUkUq2VVwtA9EKfJ170wwtDX/+88NbxNNg99QsmQag+A8J2wBPDDbSe1lGqGo0jzjgmD6ymTTOjYisE25pLiDey5E+whJI/NwN87S0zltDWNNYccUFIUrcFCd1nbt4JUkHlXPfOZRZ9B5SDkrXusuWJykyPaRubnwFPMztsZJysbB3py9hXGbRhlNivSnRYFR1jAVaPZRPtPCPJn0kohlYHxaR6fKPLlufIBNwDSz645pTUxqWoMBbCWhlzRUpRbhrShNvYiaTiN5MpWEdMiKwo+Qrta/dDgqpgwi5jrZf9aIJzQCuVpL9gnVxkILnqCzM8DeZo8nWWow7LPzsz9IPup05CQLxD+ql2Li32yMaQp0I3Y60FyL56RQf1Gh8pl5ls2YQnUoTjZ2OoAxBM6W91I5Kyw+Blnb2w3Dix7PkHunAs1XsRr4jS2EkpGiqlILw+TJPv9PQ/0lP9nt3BbDX+eraaOjfc6HI33OS0bPWJXCdssA+znXeDzZxYbgaH5chsNSBKge/ENB4qpt7pakicuifv73x1vnw1i3rmqzPcroJuAcFuue6h5GK2XHC4uDD0I2HQrWFYMNPhgbneG1bgrk/MBsvpCu5YuvlahW27vy3S/gM='),

	 	this.createVertexTemplateEntry('text;html=1;strokeColor=none;fillColor=none;overflow=fill;', 160, 140,
 			'<table border="1" width="100%" height="100%" cellpadding="4" style="width:100%;height:100%;border-collapse:collapse;">' +
 			'<tr><th align="center"><b>Title</b></th></tr>' +
 			'<tr><td align="center">Section 1.1\nSection 1.2\nSection 1.3</td></tr>' +
 			'<tr><td align="center">Section 2.1\nSection 2.2\nSection 2.3</td></tr></table>', 'HTML Table 4'),

	 	this.addEntry('link hyperlink', mxUtils.bind(this, function()
	 	{
	 		var cell = new mxCell('Link', new mxGeometry(0, 0, 60, 40), 'text;html=1;strokeColor=none;fillColor=none;whiteSpace=wrap;align=center;verticalAlign=middle;fontColor=#0000EE;fontStyle=4;');
	 		cell.vertex = true;
	 		this.graph.setLinkForCell(cell, 'https://www.draw.io');

	 		return this.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Link');
	 	})),
	 	this.addEntry('timestamp date time text label', mxUtils.bind(this, function()
	 	{
	 		var cell = new mxCell('%date{ddd mmm dd yyyy HH:MM:ss}%', new mxGeometry(0, 0, 160, 20), 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;');
	 		cell.vertex = true;
	 		this.graph.setAttributeForCell(cell, 'placeholders', '1');

	 		return this.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Timestamp');
	 	})),
	 	this.addEntry('variable placeholder metadata hello world text label', mxUtils.bind(this, function()
	 	{
	 		var cell = new mxCell('%name% Text', new mxGeometry(0, 0, 80, 20), 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;');
	 		cell.vertex = true;
	 		this.graph.setAttributeForCell(cell, 'placeholders', '1');
	 		this.graph.setAttributeForCell(cell, 'name', 'Variable');

	 		return this.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Variable');
	 	})),
		this.createVertexTemplateEntry('shape=ext;double=1;rounded=0;whiteSpace=wrap;html=1;', 120, 80, '', 'Double Rectangle', null, null, 'rect rectangle box double'),
	 	this.createVertexTemplateEntry('shape=ext;double=1;rounded=1;whiteSpace=wrap;html=1;', 120, 80, '', 'Double Rounded Rectangle', null, null, 'rounded rect rectangle box double'),
 		this.createVertexTemplateEntry('ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;', 100, 60, '', 'Double Ellipse', null, null, 'oval ellipse start end state double'),
		this.createVertexTemplateEntry('shape=ext;double=1;whiteSpace=wrap;html=1;aspect=fixed;', 80, 80, '', 'Double Square', null, null, 'double square'),
		this.createVertexTemplateEntry('ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;aspect=fixed;', 80, 80, '', 'Double Circle', null, null, 'double circle'),
		this.createVertexTemplateEntry('rounded=1;whiteSpace=wrap;html=1;strokeWidth=2;fillWeight=4;hachureGap=8;hachureAngle=45;fillColor=#1ba1e2;sketch=1;', 120, 60, '', 'Rectangle Sketch', true, null, 'rectangle rect box text sketch comic retro'),
		this.createVertexTemplateEntry('ellipse;whiteSpace=wrap;html=1;strokeWidth=2;fillWeight=2;hachureGap=8;fillColor=#990000;fillStyle=dots;sketch=1;', 120, 60, '', 'Ellipse Sketch', true, null, 'ellipse oval sketch comic retro'),
		this.createVertexTemplateEntry('rhombus;whiteSpace=wrap;html=1;strokeWidth=2;fillWeight=-1;hachureGap=8;fillStyle=cross-hatch;fillColor=#006600;sketch=1;', 120, 60, '', 'Diamond Sketch', true, null, 'diamond sketch comic retro'),
	 	this.createVertexTemplateEntry('html=1;whiteSpace=wrap;shape=isoCube2;backgroundOutline=1;isoAngle=15;', 90, 100, '', 'Isometric Cube', true, null, 'cube box iso isometric'),
	 	this.createVertexTemplateEntry('html=1;whiteSpace=wrap;aspect=fixed;shape=isoRectangle;', 150, 90, '', 'Isometric Square', true, null, 'rectangle rect box iso isometric'),
	 	this.createEdgeTemplateEntry('edgeStyle=isometricEdgeStyle;endArrow=none;html=1;', 50, 100, '', 'Isometric Edge 1'),
	 	this.createEdgeTemplateEntry('edgeStyle=isometricEdgeStyle;endArrow=none;html=1;elbow=vertical;', 50, 100, '', 'Isometric Edge 2'),
	 	this.createVertexTemplateEntry('shape=curlyBracket;whiteSpace=wrap;html=1;rounded=1;', 20, 120, '', 'Left Curly Bracket'),
		this.createVertexTemplateEntry('shape=curlyBracket;whiteSpace=wrap;html=1;rounded=1;flipH=1;', 20, 120, '', 'Right Curly Bracket'),
	 	this.createVertexTemplateEntry('line;strokeWidth=2;html=1;', 160, 10, '', 'Horizontal Line'),
	 	this.createVertexTemplateEntry('line;strokeWidth=2;direction=south;html=1;', 10, 160, '', 'Vertical Line'),
	 	this.createVertexTemplateEntry('line;strokeWidth=4;html=1;perimeter=backbonePerimeter;points=[];outlineConnect=0;', 160, 10, '', 'Horizontal Backbone', false, null, 'backbone bus network'),
	 	this.createVertexTemplateEntry('line;strokeWidth=4;direction=south;html=1;perimeter=backbonePerimeter;points=[];outlineConnect=0;', 10, 160, '', 'Vertical Backbone', false, null, 'backbone bus network'),
	 	this.createVertexTemplateEntry('shape=crossbar;whiteSpace=wrap;html=1;rounded=1;', 120, 20, '', 'Horizontal Crossbar', false, null, 'crossbar distance measure dimension unit'),
		this.createVertexTemplateEntry('shape=crossbar;whiteSpace=wrap;html=1;rounded=1;direction=south;', 20, 120, '', 'Vertical Crossbar', false, null, 'crossbar distance measure dimension unit'),
	 	this.createVertexTemplateEntry('shape=image;html=1;verticalLabelPosition=bottom;verticalAlign=top;imageAspect=1;aspect=fixed;image=' + this.gearImage, 52, 61, '', 'Image (Fixed Aspect)', false, null, 'fixed image icon symbol'),
	 	this.createVertexTemplateEntry('shape=image;html=1;verticalLabelPosition=bottom;verticalAlign=top;imageAspect=0;image=' + this.gearImage, 50, 60, '', 'Image (Variable Aspect)', false, null, 'strechted image icon symbol'),
	 	this.createVertexTemplateEntry('icon;html=1;image=' + this.gearImage, 60, 60, 'Icon', 'Icon', false, null, 'icon image symbol'),
	 	this.createVertexTemplateEntry('label;whiteSpace=wrap;html=1;image=' + this.gearImage, 140, 60, 'Label', 'Label 1', null, null, 'label image icon symbol'),
	 	this.createVertexTemplateEntry('label;whiteSpace=wrap;html=1;align=center;verticalAlign=bottom;spacingLeft=0;spacingBottom=4;imageAlign=center;imageVerticalAlign=top;image=' + this.gearImage, 120, 80, 'Label', 'Label 2', null, null, 'label image icon symbol'),
		this.addEntry('shape group container', function()
		{
		    var cell = new mxCell('Label', new mxGeometry(0, 0, 160, 70),
				'html=1;whiteSpace=wrap;container=1;recursiveResize=0;collapsible=0;');
		    cell.vertex = true;
		    
			var symbol = new mxCell('', new mxGeometry(20, 20, 20, 30), 'triangle;html=1;whiteSpace=wrap;');
			symbol.vertex = true;
			cell.insert(symbol);
	    	
    		return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Shape Group');
		}),
	 	this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;left=0;right=0;fillColor=none;', 120, 60, '', 'Partial Rectangle'),
		this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;bottom=0;top=0;fillColor=none;', 120, 60, '', 'Partial Rectangle'),
		this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;bottom=0;right=0;fillColor=none;', 120, 60, '', 'Partial Rectangle'),
		this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;bottom=1;right=1;left=1;top=0;fillColor=none;routingCenterX=-0.5;', 120, 60, '', 'Partial Rectangle'),
		this.createVertexTemplateEntry('shape=waypoint;sketch=0;fillStyle=solid;size=6;pointerEvents=1;points=[];fillColor=none;resizable=0;rotatable=0;perimeter=centerPerimeter;snapToPoint=1;', 40, 40, '', 'Waypoint'),
		this.createEdgeTemplateEntry('edgeStyle=segmentEdgeStyle;endArrow=classic;html=1;', 50, 50, '', 'Manual Line', null, lineTags + 'manual'),
	 	this.createEdgeTemplateEntry('shape=filledEdge;rounded=0;fixDash=1;endArrow=none;strokeWidth=10;fillColor=#ffffff;edgeStyle=orthogonalEdgeStyle;', 60, 40, '', 'Filled Edge'),
	 	this.createEdgeTemplateEntry('edgeStyle=elbowEdgeStyle;elbow=horizontal;endArrow=classic;html=1;', 50, 50, '', 'Horizontal Elbow', null, lineTags + 'elbow horizontal'),
	 	this.createEdgeTemplateEntry('edgeStyle=elbowEdgeStyle;elbow=vertical;endArrow=classic;html=1;', 50, 50, '', 'Vertical Elbow', null, lineTags + 'elbow vertical')
	];

	this.addPaletteFunctions('misc', mxResources.get('misc'), (expand != null) ? expand : true, fns);
	this.setCurrentSearchEntryLibrary();
};