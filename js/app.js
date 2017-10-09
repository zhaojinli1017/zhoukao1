//方法二:
    var newArr = ["a","b","c","d","a","b","c"];
    function norepeat(newArr){
        var newBrr = [];
        
        for(let i=newArr.length-1;i>=0;i--){
            if(newBrr.indexOf(newArr[i])==-1){
                newBrr.unshift(newArr[i]);
            }    
        }
        return newBrr;
    }
    console.log(norepeat(newArr));