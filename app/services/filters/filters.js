app.filter("stringFormatterFilter", function() {    
    return function(item) {  
        var newString = "";      
        for(i = 0; i < item.length; i++) {             
            newString += item[i].toUpperCase();            
        }
        return newString;
    }
});

app.filter("textLengthFilter", function() {
    return function(description) {
        let result = description;
        if(description.length > 300) {
            result = description.substring(0, 300) + "...";
        }
        return result;
    }
});
