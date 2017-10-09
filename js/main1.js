//方法一:
    var arr = [1,2,3,4,5,4,3,2];
    function repeat(arr){
        var brr = [];
        for(let i=0;i<arr.length;i++){
            if(brr.indexOf(arr[i])==-1){
                brr.push(arr[i]);
            }
        }
        return brr;
    }
    console.log(repeat(arr));

         