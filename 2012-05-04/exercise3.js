var domain1 = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([20,20]);

var verticalStabilizer = [];
var horizontalStabilizer = [];

// Vertical Stabilizer
var p0 = [[0,0,22],[0,2.5,24],[0,0,3],[0,0,3]];
var p1 = [[0,2.5,24],[0,0,25.5],[0,0,3],[0,-2,0]];
var p2 = [[0,0,25.5],[0,-.7,24],[0,-2,0],[0,0,-2]];

var p3 = [[.2,0,22],[.2,0,24],[0,0,0],[0,0,0]];
var p4 = [[.2,0,24],[.2,-.7,24],[0,0,0],[.1,0,0]];

var p5 = [[-.2,0,22],[-.2,0,24],[0,0,0],[0,0,0]];
var p6 = [[-.2,0,24],[-.2,-.7,24],[0,0,0],[-.1,0,0]];

var p7 = [[.2,0,24]];
var p8 = [[-.2,0,24]];

var c0 = CUBIC_HERMITE(S0)(p0);
var c1 = CUBIC_HERMITE(S0)(p1);
var c2 = CUBIC_HERMITE(S0)(p2);

var c3 = CUBIC_HERMITE(S0)(p3);
var c7 = BEZIER(S0)(p7);
var c4 = CUBIC_HERMITE(S0)(p4);

var c5 = CUBIC_HERMITE(S0)(p5);
var c8 = BEZIER(S0)(p8);
var c6 = CUBIC_HERMITE(S0)(p6);

var s0 = BEZIER(S1)([c0,c3]);
var s1 = BEZIER(S1)([c1,c7]);
var s2 = BEZIER(S1)([c2,c4]);

var s3 = BEZIER(S1)([c0,c5]);
var s4 = BEZIER(S1)([c1,c8]);
var s5 = BEZIER(S1)([c2,c6]);

var surf0 = MAP(s0)(domain2);
var surf1 = MAP(s1)(domain2);
var surf2 = MAP(s2)(domain2);

var surf3 = MAP(s3)(domain2);
var surf4 = MAP(s4)(domain2);
var surf5 = MAP(s5)(domain2);

verticalStabilizer.push(surf0);
verticalStabilizer.push(surf1);
verticalStabilizer.push(surf2);
verticalStabilizer.push(surf3);
verticalStabilizer.push(surf4);
verticalStabilizer.push(surf5);

DRAW(COLOR([1,1,0])(STRUCT(verticalStabilizer)));


// Horizontal Stabilizer
var p9 = [[.5,-.5,21],[4,-.5,22],[.5,-.5,23]];
var p10 = [[.5,-.5,21],[.5,-.3,22],[.5,-.5,23]];
var p11 = [[.5,-.5,21],[.5,-.7,22],[.5,-.5,23]];

var c9 = BEZIER(S0)(p9);
var c10 = BEZIER(S0)(p10);
var c11 = BEZIER(S0)(p11);


var s6 = BEZIER(S1)([c9,c10]);
var s7 = BEZIER(S1)([c9,c11]);

var surf6 = MAP(s6)(domain2);
var surf7 = MAP(s7)(domain2);

var rightStabilizer = STRUCT([surf6,surf7]);
var s = S([0])([-1]);
var leftStabilizer = STRUCT([s,rightStabilizer]);

DRAW(COLOR([1,1,0])(rightStabilizer));
DRAW(COLOR([1,1,0])(leftStabilizer));