						function addKey(elt, key, kx, ky)
						{
							kx = (kx != null) ? kx : 30;
							ky = (ky != null) ? ky : 26;

							elt.style.position = 'relative';
							elt.style.overflow = 'visible';
	
							var div = document.createElement('div');
							div.style.position = 'absolute';
							div.style.fontSize = '8px';
							div.style.left = kx + 'px';
							div.style.top = ky + 'px';
							mxUtils.write(div, key);
							elt.appendChild(div);
						};