
/**
 * Day 17: Assembly emulator, hooray!
 * Took a good while for me to come up with the smarter way to solve part 2, including widening the net.
 * The simple x(n+1) = 8*x(n) + (0..7) only worked part of the way.
 */

var a, b, c;
var out;
var code;
var ip;

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    a = parseInt(lines[0].split(':')[1]);
    b = parseInt(lines[1].split(':')[1]);
    c = parseInt(lines[2].split(':')[1]);
    code = lines[4].split(':')[1].split(',');
    out = new Array();
    ip = 0;
    while(ip < code.length) {
        debug();
        exec();
    }
    var sum = out.join();
    return sum;
}

function solve2(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    code = lines[4].split(':')[1].split(',');
    var x = 0;
    for(var i = 1; i <= code.length; i++) {
        var match;
        for(var aa = 0; aa < 8*i; aa++) {
            match = true;
            a = aa + x;
            b = 0;
            c = 0;
            ip = 0;
            out = new Array();
            while(ip < code.length) {
                exec();
            }
            for(var j = 0; j < i; j++) {
                if(out[j] != parseInt(code[code.length-i + j])) {
                    match = false;
                }
            }
            if(match) {
                    x += aa;
                    aa = 8*i;
            }
        }
        if(match) {
            console.log("Run ",i,x,out.join());
            x *= 8;
        } else {
            i--;
            x += 8;
        }
    }
    var sum = x;
    return sum;
}

function exec() {
    //console.log(ip,code[ip],code[ip+1]);
    //dis(ip);
    switch(parseInt(code[ip])) {
        case 0: // adv
            var num = a;
            var den = 2**combo(code[ip+1]);
            a = parseInt(num / den);
            //console.log("a="+num+"/"+den+" ("+parseInt(num/den)+")");
            break;
        case 1: // bxl
            b ^= parseInt(code[ip+1]);
            break;
        case 2: // bst
            b = combo(code[ip+1]) & 7;
            break;
        case 3: // jnz
            if(a != 0)
                ip = parseInt(code[ip+1])-2;
            break;
        case 4: // bxc
            b ^= c;
            break;
        case 5: // out
            out.push(combo(code[ip+1]) & 7);
            break;
        case 6: // bdv
            var num = a;
            var den = 2**combo(code[ip+1]);
            b = parseInt(num / den);
            break;
        case 7: // cdv
            var num = a;
            var den = 2**combo(code[ip+1]);
            c = parseInt(num / den);
            break;
    }
    ip += 2;
}

function combo(op) {
    var val = parseInt(op);
    switch(val) {
        case 0:
        case 1:
        case 2:
        case 3:
            return val;
        case 4:
            return a;
        case 5:
            return b;
        case 6:
            return c;
        case 7:
            console.log("ILLEGAL");
    }
}

function dombo(op) {
    var val = parseInt(op);
    switch(val) {
        case 0:
        case 1:
        case 2:
        case 3:
            return val;
        case 4:
            return 'a';
        case 5:
            return 'b';
        case 6:
            return 'c';
    }
}

function disasm() {
    for(var i = 0; i < code.length; i+=2) {
        dis(i);
    }
}

function dis(i) {
    switch(parseInt(code[i])) {
        case 0: // adv
            console.log("adv "+dombo(code[i+1]));
            break;
        case 1: // bxl
            console.log("bxl "+code[i+1]);
            break;
        case 2: // bst
            console.log("bst "+dombo(code[i+1]));
            break;
        case 3: // jnz
            console.log("jnz");
            break;
        case 4: // bxc
            console.log("bxc");
            break;
        case 5: // out
            console.log("out "+dombo(code[i+1]));
            break;
        case 6: // bdv
            console.log("bdv "+dombo(code[i+1]));
            break;
        case 7: // cdv
            console.log("cdv "+dombo(code[i+1]));
            break;
    }
}

function debug() {
    console.log("A:  " + a);
    console.log("B:  " + b);
    console.log("C:  " + c);
    console.log("IP: " + ip);
    //console.log("Program: ",code);
}