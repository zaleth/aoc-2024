
/**
 * Day 9: Thankfully an easy one after the last two days
 */

function solve1(text) {
    console.log("Length: " + text.length);
    console.log("Disk: " + print(unpack(text)));
    console.log("Pack: " + print(compress(unpack(text))));
    var sum = checksum(compress(unpack(text)));
    return sum;
}

function solve2(text) {
    console.log("Disk: " + print(unpack(text)));
    return checksum(pack(unpack(text)));
}

function unpack(line) {
    var fileId = 0;
    var disk = new Array();
    for(var i = 0; i < line.length; i++) {
        var count = parseInt(line.charAt(i));
        var val = (i % 2 == 0) ? fileId++ : -1;
        for(var c = 0; c < count; c++) {
            disk.push(val);
        }
    }
    return disk;
}

function compress(disk) {
    var firstFree = disk.indexOf(-1);
    for(var i = disk.length - 1; i > firstFree; i--) {
        if(disk[i] < 0)
            continue;
        disk[firstFree] = disk[i];
        disk[i] = -1;
        firstFree = disk.indexOf(-1);
    }
    return disk;
}

function pack(disk) {
    var fileId = Math.max(...disk);
    console.log("# files: " + fileId);
    while(fileId > 0) {
        const len = fileLen(disk, fileId);
        const oldPos = filePos(disk, fileId);
        //console.log("Len(" + fileId + "): " + fileLen(disk, fileId));
        var newPos = findFree(disk, len);
        if(newPos > -1 && (newPos + len) <= oldPos) {
            for(var i = 0; i < len; i++) {
                disk[newPos + i] = disk[oldPos + i];
                disk[oldPos + i] = -1;
            }
        }
        fileId--;
    }
    console.log("Pack: " + print(disk));
    return disk;
}

function filePos(disk, id) {
    var idx;
    for(idx = 0;idx < disk.length && disk[idx] != id; idx++)
        ;
    return idx < disk.length ? idx : -1;
}

function fileLen(disk, id) {
    var len = 0, idx;
    for(idx = 0;idx < disk.length && disk[idx] != id; idx++)
        ;
    while(idx < disk.length && disk[idx++] == id)
        len++;
    return len;
}

function findFree(disk, len) {
    var idx = 0, free = 0;
    while(idx < disk.length) {
        if(disk[idx + free] < 0) {
            if(++free >= len)
                return idx;
        } else {
            idx += free + 1;
            free = 0;
        }
    }
    return -1;
}

function checksum(disk) {
    var sum = 0;
    for(var i = 0; i < disk.length; i++) {
        if(disk[i] > -1)
            sum += i * disk[i];
    }
    return sum;
}

function print(disk) {
    var str = '';
    disk.forEach((val) => str += (val < 0 ? '.' : val));
    return str;
}