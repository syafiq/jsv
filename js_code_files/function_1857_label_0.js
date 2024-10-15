    sanitizeTextColumn: function (textField) {
        if(textField.getValue()){
            const sanitizedValue = textField.getValue().replace(/[<>"'!?/\\&%$();]/gi, '');
            textField.setValue(sanitizedValue);
        }
    }