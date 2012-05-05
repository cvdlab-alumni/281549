var fuselage = [];

var domain1 = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([20,20]);

// Fuselage Central Section
var p0 = [[2,0,4],[2,2,4],[0,2,4],[-2,2,4],[-2,0,4],[-2,-2,4],[0,-2,4],[2,-2,4],[2,0,4]];
var p1 = [[2,0,14],[2,2,14],[0,2,14],[-2,2,14],[-2,0,14],[-2,-2,14],[0,-2,14],[2,-2,14],[2,0,14]];

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);

var s0 = BEZIER(S1)([c0,c1]);

var surf0 = MAP(s0)(domain2);

fuselage.push(surf0);

// Fuselage Front Section
var p2 = [[2,0,2],[2,2,2],[0,2,2],[-2,2,2],[-2,0,2],[-2,-2,2],[0,-2,2],[2,-2,2],[2,0,2]];
var p3 = [[0,0,0]];

var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);

var s1 = BEZIER(S1)([c0,c2,c3]);

var surf1 = MAP(s1)(domain2);

fuselage.push(COLOR([1,0,0])(surf1));

// Fuselage Back Section
var p4 = [[.7,0,24],[.7,.7,24],[0,.7,24],[-.7,.7,24],[-.7,0,24],[-.7,-.7,24],[0,-.7,24],[.7,-.7,24],[.7,0,24]];

var c4 = BEZIER(S0)(p4);

var s2 = BEZIER(S1)([c1,c4]);

var surf2 = MAP(s2)(domain2);
var surf3 = MAP(c4)(domain2);

fuselage.push(surf2);
fuselage.push(surf3);

// Fuselage Back Cover
var p5 = [[0,0,24]];

var c5 = BEZIER(S0)(p5);

var s3 = BEZIER(S1)([c4,c5]);

var surf4 = MAP(s3)(domain2);

fuselage.push(surf4);

DRAW(STRUCT(fuselage));