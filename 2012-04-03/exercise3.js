var elements = []

// Base Floor
var baseFloor = [];

var restRoom = T([0,1])([1,17])(SIMPLEX_GRID([[8],[5],[.1]]));
baseFloor.push(restRoom);

var pavilion1 = T([0])([1])(SIMPLEX_GRID([[20],[1,-9,7],[.1]]));
baseFloor.push(pavilion1);

var pavilion2 = T([0])([21])(SIMPLEX_GRID([[15],[17],[.1]]));
baseFloor.push(pavilion2);

var pavilion3 = T([0])([36])(SIMPLEX_GRID([[3],[1,-3,13],[.1]]));
baseFloor.push(pavilion3);

var pavilion4 = T([0,1])([39,4])(SIMPLEX_GRID([[8],[12],[.1]]));
baseFloor.push(pavilion4);

var pavilion5 = T([0,1])([47,4])(SIMPLEX_GRID([[4],[1],[.1]]));
baseFloor.push(pavilion5);

var pavilion6 = T([0,1])([51,4])(SIMPLEX_GRID([[1],[2],[.1]]));
baseFloor.push(pavilion6);

var pavilion7 = SIMPLEX_GRID([[1],[2],[.1]]);
baseFloor.push(pavilion7);

elements = elements.concat(baseFloor);

// Pools
var largePool = T([0,1])([1,1])(SIMPLEX_GRID([[20],[9]]));
elements.push(COLOR([0,.5,1])(largePool));

var smallPool = T([0,1])([47,5])(SIMPLEX_GRID([[4],[11]]));
elements.push(COLOR([0,.5,1])(smallPool));

// Left Wall
var bottomLeftWall = T([0,1,2])([.8,.8,.1])(SIMPLEX_GRID([[7.2],[.2],[3]]));
elements.push(COLOR([.9,.8,.7])(bottomLeftWall));

var patch1LeftWall = T([0,1])([.8,2])(SIMPLEX_GRID([[.2],[20.2],[.1]]));
elements.push(patch1LeftWall);

var leftLeftWall = T([0,1,2])([.8,.8,.1])(SIMPLEX_GRID([[.2],[21.4],[3]]));
elements.push(COLOR([.9,.8,.7])(leftLeftWall));

var topLeftWall = T([0,1,2])([1,22,.1])(SIMPLEX_GRID([[8],[.2],[3]]));
elements.push(COLOR([.9,.8,.7])(topLeftWall));

var patch2LeftWall = T([0,1])([1,22])(SIMPLEX_GRID([[8],[.2],[.1]]));
elements.push(patch2LeftWall);

var right1LeftWall = T([0,1,2])([9,17,.1])(SIMPLEX_GRID([[.2],[(5 / 3)],[3]]));
elements.push(COLOR([.9,.8,.7])(right1LeftWall));

var right2aLeftWall = T([0,1,2])([9,17 + (5 / 3),.1])(SIMPLEX_GRID([[.2],[(5 / 3)],[2]]));
elements.push(COLOR([.9,.8,.7])(right2aLeftWall));

var right2bLeftWall = T([0,1,2])([9,17 + (5 / 3),2.6])(SIMPLEX_GRID([[.2],[(5 / 3)],[.5]]));
elements.push(COLOR([.9,.8,.7])(right2bLeftWall));

var right3LeftWall = T([0,1,2])([9,17 + (10 / 3),.1])(SIMPLEX_GRID([[.2],[(5 / 3) + .2],[3]]));
elements.push(COLOR([.9,.8,.7])(right3LeftWall));

var patch2LeftWall = T([0,1])([9,17])(SIMPLEX_GRID([[.2],[5.2],[.1]]));
elements.push(patch2LeftWall);

// Right Wall
var bottomRightWall = T([0,1,2])([41.5,4.8,.1])(SIMPLEX_GRID([[9.7],[.2],[3]]));
elements.push(COLOR([.9,.8,.7])(bottomRightWall));

var rightRightWall = T([0,1,2])([51,5,.1])(SIMPLEX_GRID([[.2],[11.2],[3]]));
elements.push(COLOR([.9,.8,.7])(rightRightWall));

var patch1RightWall = T([0,1])([51,6])(SIMPLEX_GRID([[.2],[10.2],[.1]]));
elements.push(patch1RightWall);

var topRightWall = T([0,1,2])([37.5,16,.1])(SIMPLEX_GRID([[13.5],[.2],[3]]));
elements.push(COLOR([.9,.8,.7])(topRightWall));

var patch2RightWall = T([0,1])([39,16])(SIMPLEX_GRID([[12],[.2],[.1]]));
elements.push(patch2RightWall);

// Central Walls
var center1CentralWall = T([0,1,2])([7.5,15,.1])(SIMPLEX_GRID([[19],[.2],[3]]));
elements.push(COLOR([.9,.8,.7])(center1CentralWall));

var center2CentralWall = T([0,1,2])([25.2,7.4,.1])(SIMPLEX_GRID([[8.6],[.2],[3]]));
elements.push(COLOR([.9,.8,.7])(center2CentralWall));

var center3CentralWall = T([0,1,2])([37.5,11.4,.1])(SIMPLEX_GRID([[5],[.2],[3]]));
elements.push(COLOR([.9,.8,.7])(center3CentralWall));

// Bench
var benchSurface = T([0,1,2])([7.8,85/6,.5])(SIMPLEX_GRID([[15.4],[4/6],[.2]]));
elements.push(COLOR([.9,.9,.9])(benchSurface));

var benchPillar = T([0,1,2])([7.9,14.25,.1])(SIMPLEX_GRID([[.5],[.5],[.4]]));
var benchPillars = STRUCT(REPLICA(8)([benchPillar,T([0])([2.1])]));
elements.push(COLOR([.9,.9,.9])(benchPillars));

// Ladder
var ladder = T([0,1,2])([36,1,-.1])(SIMPLEX_GRID([[.36],[3],[.1]]));
var ladders = STRUCT(REPLICA(8)([ladder,T([0,2])([.36,-.1])]));
elements.push(COLOR([.9,.9,.9])(ladders));

// Glass Walls
var glassHorizontalWallTile = T([2])([.05])(SIMPLEX_GRID([[.05,-.9,.05],[.05],[2.9]]));
var glassVerticalWallTile = SIMPLEX_GRID([[1],[.05],[.05,-2.9,.05]]); 
var glassWallTile = STRUCT([glassHorizontalWallTile,glassVerticalWallTile]);

var glassRestRoomWallElement = T([0,1,2])([1,17,.1])(STRUCT(REPLICA(1)([glassWallTile])));
var glassRestRoomWall = STRUCT(REPLICA(8)([glassRestRoomWallElement,T([0])([1])]));
elements = elements.concat(COLOR([.2,.2,.2])(glassRestRoomWall));

var glassUpperExhibitionWallElement = T([0,1,2])([30,13.60,.1])(STRUCT(REPLICA(1)([glassWallTile])));
var glassUpperExhibitionWall = STRUCT(REPLICA(10)([glassUpperExhibitionWallElement,T([0])([1])]));
elements = elements.concat(COLOR([.2,.2,.2])(glassUpperExhibitionWall));

var glassHorizontalWallLittleTile = T([2])([.05])(SIMPLEX_GRID([[.05,-.82,.05],[.05],[2.9]]));
var glassVerticalWallLittleTile = SIMPLEX_GRID([[.92],[.05],[.05,-2.9,.05]]); 
var glassWallLittleTile = STRUCT([glassHorizontalWallLittleTile,glassVerticalWallLittleTile]);

var glassRightExhibitionLittleWallElement = T([0,1,2])([44.6,6.8,.1])(R([2])([PI/2])(STRUCT(REPLICA(1)([glassWallLittleTile]))));
var glassRightExhibitionLittleWall = STRUCT(REPLICA(8)([glassRightExhibitionLittleWallElement,T([1])([.92])]));
elements = elements.concat(COLOR([.2,.2,.2])(glassRightExhibitionLittleWall));

var glassHorizontalWallLargeTile = T([2])([.05])(SIMPLEX_GRID([[.05,-(11.5/3 - 0.1),.05],[.05],[2.9]]));
var glassVerticalWallLargeTile = SIMPLEX_GRID([[11.5/3],[.05],[.05,-2.9,.05]]); 
var glassWallLargeTile = STRUCT([glassHorizontalWallLargeTile,glassVerticalWallLargeTile]);

var glassRightExhibitionLargeWallElement = T([0,1,2])([30,4.95,.1])(STRUCT(REPLICA(1)([glassWallLargeTile])));
var glassRightExhibitionLargeWall = STRUCT(REPLICA(3)([glassRightExhibitionLargeWallElement,T([0])([11.5/3])]));
elements = elements.concat(COLOR([.2,.2,.2])(glassRightExhibitionLargeWall));

var glassHorizontalWallScrollingTile = T([2])([.05])(SIMPLEX_GRID([[.05,-2.9,.05],[.05],[2.9]]));
var glassVerticalWallScrollingTile = SIMPLEX_GRID([[3],[.05],[.05,-2.9,.05]]); 
var glassWallScrollingTile = STRUCT([glassHorizontalWallScrollingTile,glassVerticalWallScrollingTile]);

var glassExhibitionScrollingWallElement = T([0,1,2])([31,7.6,.1])(R([2])([PI/2])(STRUCT(REPLICA(1)([glassWallScrollingTile]))));
var glassExhibitionScrollingWall = STRUCT(REPLICA(2)([glassExhibitionScrollingWallElement,T([1])([3])]));
var glassExhibitionScrollingWalls = STRUCT(REPLICA(2)([glassExhibitionScrollingWall,T([0])([1])]));
elements = elements.concat(COLOR([.2,.2,.2])(glassExhibitionScrollingWalls));

// Rest Room Walls
var middle11RestRoomWall = T([0,1,2])([4.95,17.05,.1])(SIMPLEX_GRID([[.1],[1.95],[3]]));
elements.push(COLOR([1,.5,.1])(middle11RestRoomWall));

var middle12RestRoomWall = T([0,1,2])([4.95,19,2.1])(SIMPLEX_GRID([[.1],[1],[1]]));
elements.push(COLOR([1,.5,.1])(middle12RestRoomWall));

var middle13RestRoomWall = T([0,1,2])([4.95,20,.1])(SIMPLEX_GRID([[.1],[2],[3]]));
elements.push(COLOR([1,.5,.1])(middle13RestRoomWall));

var middle21RestRoomWall = T([0,1,2])([5.05,20.6,.1])(SIMPLEX_GRID([[.75],[.1],[3]]));
elements.push(COLOR([1,.5,.1])(middle21RestRoomWall));

var middle22RestRoomWall = T([0,1,2])([5.8,20.6,2.1])(SIMPLEX_GRID([[.8],[.1],[1]]));
elements.push(COLOR([1,.5,.1])(middle22RestRoomWall));

var middle23RestRoomWall = T([0,1,2])([6.6,20.6,.1])(SIMPLEX_GRID([[2.4],[.1],[3]]));
elements.push(COLOR([1,.5,.1])(middle23RestRoomWall));

var middle31RestRoomWall = T([0,1,2])([6.95,20.6,.1])(SIMPLEX_GRID([[.1],[.4],[3]]));
elements.push(COLOR([1,.5,.1])(middle31RestRoomWall));

var middle32RestRoomWall = T([0,1,2])([6.95,21,2.1])(SIMPLEX_GRID([[.1],[.8],[1]]));
elements.push(COLOR([1,.5,.1])(middle32RestRoomWall));

var middle33RestRoomWall = T([0,1,2])([6.95,21.8,.1])(SIMPLEX_GRID([[.1],[.2],[3]]));
elements.push(COLOR([1,.5,.1])(middle33RestRoomWall));

// Pillars
var horizontalPillar = T([0,1,2])([-.15,-.05,.1])(SIMPLEX_GRID([[.3],[.1],[3]]));
var verticalPillar = T([0,1,2])([-.05,-.15,.1])(SIMPLEX_GRID([[.1],[.3],[3]]));
var pillar = STRUCT([horizontalPillar,verticalPillar]);

var horizontalPillarsBase = T([0,1])([26,7])(STRUCT(REPLICA(1)([pillar])));
var pillarsLine = STRUCT(REPLICA(4)([horizontalPillarsBase,T([0])([6 + 1/3])]));
var pillars = STRUCT(REPLICA(2)([pillarsLine,T([1])([7])]));
elements.push(COLOR([0,0,0])(pillars));

// Roofs
var littleRoof = T([0,1,2])([-.8,13.2,3.1])(SIMPLEX_GRID([[9.8],[9.8],[.2]]));
elements.push(COLOR([1,.8,.6])(littleRoof));

var largeRoof = T([0,1,2])([24,4,3.1])(SIMPLEX_GRID([[23],[13],[.2]]));
elements.push(COLOR([1,.8,.6])(largeRoof));

DRAW(STRUCT(elements));