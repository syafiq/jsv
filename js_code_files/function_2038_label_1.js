  reader.onload = function (e) {
       document.getElementById('div_img').innerHTML='<img src="" alt="" class="cropper" id="demo-cropper-image">';
   document.getElementById('demo-cropper-image').src = e.target.result;
   $('#modal_crop_image').modal('show');
        $('#modal_crop_image').on('shown.bs.modal', function () {
            // Define variables
            var $cropper = $(".cropper"),
                    $image = $('#demo-cropper-image'),
                    $download = $('#download'),
                    $dataX = $('#dataX'),
                    $dataY = $('#dataY'),
                    $dataHeight = $('#dataHeight'),
                    $dataWidth = $('#dataWidth'),
                    $dataScaleX = $('#dataScaleX'),
                    $dataScaleY = $('#dataScaleY'),
                    options = {
                        aspectRatio: 1,
                        preview: '.preview',
                        crop: function (e) {
                            $dataX.val(Math.round(e.x));
                            $dataY.val(Math.round(e.y));
                            $dataHeight.val(Math.round(e.height));
                            $dataWidth.val(Math.round(e.width));
                            $dataScaleX.val(e.scaleX);
                            $dataScaleY.val(e.scaleY);

var dataURL =$cropper.cropper('getCroppedCanvas',{ width: 300, height: 300 }).toDataURL();
var imgblob=dataURL.split(',');
$('#imgblob').val(imgblob[1].trim());
                           
                        }
                    };

            // Initialize cropper with options
            $cropper.cropper(options);
           
            
        });
  }