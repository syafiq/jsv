						required: function () {
							return $('#company').val().trim().length === 0 || $('#firstname').val().trim().length > 0;
						}