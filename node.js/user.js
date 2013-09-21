function(global)
{
    Object.prototype.each = function(iterateFunc) {
        var counter = 0,
        keys = Object.keys(this),
        currentKey,
        len = keys.length;
        var that = this;
        var next = function() {
            if (counter < len) {
                currentKey = keys[counter++];            
                setTimeout( iterateFunc(currentKey, that[currentKey]), 100 );
    
                next();
            } else {
                that = counter = keys = currentKey = len = next = undefined;
            }
        };
        next();
    };
}(this);
