
/**
 * Day 23: Graphs, but at least no path-finding. Also, parsing instructions is hard. Finally, not refreshing the solver page (leading to stale results being included ...) is bad.
 * Part 2 was simpler than I thought though.
 */

var nodes = new Array();
var edges = new Array();

function solve1(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    lines.forEach((line, idx) => {
        var [a,b] = line.split('-');
        if(!nodes.includes(a))
            nodes.push(a);
        if(!nodes.includes(b))
            nodes.push(b);
        if(a < b)
            edges.push(line)
        else
            edges.push(b+'-'+a);
    });
    nodes.sort();
    edges.sort();
    nodes.forEach((node) => {
        var hasTNode = node.charAt(0) == 't';
        edges.forEach((edge) => {
            if(edge.startsWith(node)) {
                var e1 = edge.split('-')[1];
                edges.forEach((name) => {
                    if(name.startsWith(e1)) {
                        var e2 = name.split('-')[1];
                        if(edges.includes(node+'-'+e2)) {
                            // found a triangle
                            if(hasTNode || e1.charAt(0) == 't' || e2.charAt(0) == 't') {
                                console.log(node+'-'+e1+'-'+e2);
                                sum++;
                            }
                        }
                    }
                });
            }
        });
    });
    return sum;
}

function solve2(text) {
    const lines = text.split('\n');
    console.log("# of lines: " + lines.length);
    var sum = 0;
    var lan = '';
    lines.forEach((line, idx) => {
        var [a,b] = line.split('-');
        if(!nodes.includes(a))
            nodes.push(a);
        if(!nodes.includes(b))
            nodes.push(b);
        if(a < b)
            edges.push(line)
        else
            edges.push(b+'-'+a);
    });
    nodes.sort();
    edges.sort();
    while(nodes.length > 0) {
        console.log("# nodes: " + nodes.length);
        var graph = new Array();
        var root = nodes[0];
        graph.push(root);
        for(var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if(edges.includes(root+'-'+node)) {
                var pass = true;
                for(var j = 1; pass && j < graph.length; j++) {
                    if(!edges.includes(graph[j]+'-'+node))
                        pass=false;
                }
                if(pass) {
                    graph.push(node);
                }
            }
        }
        console.log("Graph: "+graph.join(','));
        if(graph.length > sum) {
            sum = graph.length;
            lan = graph.join(',');
        }
        nodes = nodes.filter((e) => !graph.includes(e));
    }
    return lan;
}
