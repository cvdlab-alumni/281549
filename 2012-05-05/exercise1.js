var wing = [];

var domain1 = INTERVALS(1)(100);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);

// Wing Upper Section
var p0 = [[1,0,0],[-.5,1,0],[4,2,0],[9.5,.5,0],[9,0,0]];
var p1 = p0.map(function (p) { return [p[0],p[1],p[2]+20]; });
var p2 = p1.map(function (p) { return [p[0],p[1],p[2]+4]; });
var p3 = [[1.5,0,24],[3,.5,27],[7.5,0,24]];

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);

var s0 = BEZIER(S1)([c0,c1,c2,c3]);
var surf0 = MAP(s0)(domain2);

wing.push(surf0);

// Wing Lower Section
var p4 = [[9,0,0],[3,-.5,0],[1,0,0]];
var p5 = p4.map(function (p) { return [p[0],p[1],p[2]+20]; });
var p6 = p5.map(function (p) { return [p[0],p[1],p[2]+4]; });
var p7 = [[7.5,0,24],[3,.5,27],[1.5,0,24]];

var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);

var s1 = BEZIER(S1)([c4,c5,c6,c7]);
var surf1 = MAP(s1)(domain2);

wing.push(surf1);

// Wing Border Surface
var s2 = BEZIER(S1)([c0,c4]);
var surf2 = MAP(s2)(domain2);

wing.push(surf2);

DRAW(COLOR([1,1,0])(STRUCT(wing)));
