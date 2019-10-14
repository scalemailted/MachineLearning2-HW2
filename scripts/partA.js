let sigmoid = x => 1 / (1 + Math.E**-x)
let tanh = x => (Math.E**x - Math.E**-x) / (Math.E**x + Math.E**-x)
let getY = (xArr, fxn) => xArr.map( x => fxn(x) );
//let range = (min,max) => [ ...Array(max-min+1).keys()].map( e => e+min )
//let range = (min, max) => Array.from( {length:max-min+1}, (_,i) => min+i)

let range = function(min, max){
    let arr = [];
    for (min; min<max; min++){
        arr.push(min);
    }
    return arr;
}

let makeTrace = function(name,xArr,yArr,col){
    let trace = {
        name: name,
        x: xArr ,
        y: yArr ,
        mode: 'lines',
        marker: {color:col, size: 10},
        line: {shape: 'spline'}
    };
    return trace;
}

let plotGraph = function(){
    let xArr = range(-10, 10);
    let ySig = getY(xArr, sigmoid);
    let yTanh = getY(xArr, tanh);

    let traceSig = makeTrace('sigmoid',xArr, ySig, 'red');
    let traceTanh = makeTrace('tanh',xArr, yTanh, 'blue'); 

    let data = [ traceSig, traceTanh ];
    Plotly.newPlot('plot', data);
}

plotGraph();