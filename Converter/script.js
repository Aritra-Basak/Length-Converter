function call1(element){
    let f2='f2';
    document.getElementById('f2').value='';
    convert(element,f2);
}
function call2(element){
    let f2='f1';
    document.getElementById('f1').value='';
    convert(element,f2);
}
//both the function have f1 and f2 stored in f2 variable cause we can take a single input from any side at a single time.So bascially we are working with a single input variable only.
function clearf(ele){
    console.log('free',ele)
    document.getElementById('f1').value='';
    document.getElementById('f2').value='';
}
function convert(element,f2) {
    
    let select1=document.getElementById('select1').value;
    let select2=document.getElementById('select2').value;
    console.log(select1,select2);

    if(select1=='Kilometer' && select2=='Kilometer'){
        document.getElementById(f2).value=element;
    }else
    if(select1=='Kilometer' && select2=='Centimeter'){
        document.getElementById(f2).value=element*100000;
    }else
    if(select1=='Kilometer' && select2=='Meter'){
        document.getElementById(f2).value=element*1000;
    }else
    if(select1=='Kilometer' && select2=='Millimeter'){
        document.getElementById(f2).value=element*1000000;
    }else
    if(select1=='Centimeter' && select2=='Kilometer'){
        document.getElementById(f2).value=element/100000;
    }else
    if(select1=='Centimeter' && select2=='Centimeter'){
        document.getElementById(f2).value=element;
    }else
    if(select1=='Centimeter' && select2=='Meter'){
        document.getElementById(f2).value=element/100;
    }else
    if(select1=='Centimeter' && select2=='Millimeter'){
        document.getElementById(f2).value=element*10;
    }else
    if(select1=='Meter' && select2=='Kilometer'){
        document.getElementById(f2).value=element/1000;
    }else
    if(select1=='Meter' && select2=='Centimeter'){
        document.getElementById(f2).value=element/0.01;
    }else
    if(select1=='Meter' && select2=='Meter'){
        document.getElementById(f2).value=element;
    }else
    if(select1=='Meter' && select2=='Millimeter'){
        document.getElementById(f2).value=element*1000;
    }else
    if(select1=='Millimeter' && select2=='Kilometer'){
        document.getElementById(f2).value=element/1000000;
    }else
    if(select1=='Millimeter' && select2=='Centimeter'){
        document.getElementById(f2).value=element/10;
    }else
    if(select1=='Millimeter' && select2=='Meter'){
        document.getElementById(f2).value=element/1000;
    }else
    if(select1=='Millimeter' && select2=='Millimeter'){
        document.getElementById(f2).value=element;
    }
}