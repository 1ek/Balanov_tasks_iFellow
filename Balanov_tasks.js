
function task1(){
    console.log('task1');

    let arr = new Array (10);
    let max = 0, min = 0, avg = 0;

    for (let i=0; i<arr.length; i++){
        arr[i] = Math.random();

        if (max < arr[i]) max = arr[i];
        if (min > arr[i]) min = arr[i];
        avg = avg + arr[i]/arr.length;
    }
        console.log('max = ' + max);
        console.log('min = ' + min);
        console.log('avg = ' + avg);
}

function task2(){
    console.log('task2');

    let baseStr = 'Hello';
    let indexChar;
    let searchChar;

    baseStr = baseStr.toLowerCase();

    for (let i=0; i<baseStr.length; i++){

        indexChar = i+1;
        searchChar = 0;

        while(indexChar<baseStr.length){

            if (baseStr[i] == baseStr[indexChar]){
                searchChar = baseStr[i];
            }

            indexChar++;
        }

        if (searchChar !=0){
            console.log('searchChar = ' + searchChar);
        }
    }
}

function task2v2(baseStr){
    console.log('task2v2');

    let modStr;
    let searchChar;
    let arrSearchChars = [];
    let indexArr = 0;
    let counterSearchChar = 1;

    modStr = baseStr.toLowerCase();
    //modStr = modStr.replace(/[^a-zа-я]/g,'');

    for (searchChar of modStr){

        for (let i=1; i<modStr.length; i++){
            
            if (searchChar == modStr[i]) {
                arrSearchChars[indexArr] = searchChar
                counterSearchChar++
            }           
        }

        if (counterSearchChar >1 ){
            arrSearchChars[indexArr+1] = counterSearchChar;
            indexArr = indexArr+2;
            counterSearchChar = 1;
        }

        modStr = modStr.replace(new RegExp (searchChar,'g'),'');
    }

    console.log('arrSearchChars = ' + arrSearchChars);
}

class BaseConverter {

    convert(temperatureC, convertTo){

        let temperature;

        switch(convertTo){
            case 'k':
                temperature = temperatureC + 273;
                console.log(temperatureC + 'C = ' + temperature + 'K');
                break;

            case 'f':
                temperature = temperatureC * 1.8 + 32;
                console.log(temperatureC + 'C = ' + temperature + 'F');
                break;
        }
    }
}

function task3(temperature, convertTo){
    console.log('task3');
    let convertTemperature = new BaseConverter;
    convertTemperature.convert(temperature, convertTo);
}

function task4(hours, minutes){
    console.log('task4');

    let angleHours,
        angleMinutes,
        angle;
    
    if (hours<0 || hours>23 || minutes<0 || minutes>59) 
    console.log('Incorrect data');

    else {
        angleHours = hours % 12 * 360/12;
        angleMinutes = 360/60 * minutes;
        angleHours = angleHours + angleMinutes/12;
        angle = Math.abs(angleHours - angleMinutes);

        console.log("Angle between hour and minute hand = " + angle);
    }
}

task1();
task2();
task2v2('Написать программу, которая должна найти и вывести повторяющийся символ в слове «Hello»');
task3(28, 'f');
task4(21, 00);
