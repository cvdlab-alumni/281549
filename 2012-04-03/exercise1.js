var elements = [];

// Perimeter
var perimeterPoints = [[0,0],[39,0],[39,1],[38.88,1],[38.88,4],[52,4],[52,6],[51,6],[51,16],[39,16],[39,17],[9,17],[9,22],[1,22],[1,2],[0,2],[0,0]];
var perimeterPolyline = POLYLINE(perimeterPoints);
elements.push(perimeterPolyline);

// Horizontal Grid Lines
var horizontalGrid = [];

var horizontalSection1Points = [[0,1],[39,1]];
var horizontalSection1Polyline = POLYLINE(horizontalSection1Points);
horizontalGrid.push(horizontalSection1Polyline);

var horizontalSection2Points = [[21,2],[36,2]];
var horizontalSection2Polyline = POLYLINE(horizontalSection2Points);
var horizontalSection2Final = STRUCT(REPLICA(2)([horizontalSection2Polyline,T([1])([1])]));
horizontalGrid.push(horizontalSection2Final);

var horizontalSection3Points = [[21,4],[39,4]];
var horizontalSection3Polyline = POLYLINE(horizontalSection3Points);
horizontalGrid.push(horizontalSection3Polyline);

var horizontalSection4Points = [[21,5],[52,5]];
var horizontalSection4Polyline = POLYLINE(horizontalSection4Points);
horizontalGrid.push(horizontalSection4Polyline);

var horizontalSection5Points = [[21,6],[47,6]];
var horizontalSection5Polyline = POLYLINE(horizontalSection5Points);
var horizontalSection5Final = STRUCT(REPLICA(5)([horizontalSection5Polyline,T([1])([1])]));
horizontalGrid.push(horizontalSection5Final);

var horizontalSection6Points = [[1,10],[47,10]];
var horizontalSection6Polyline = POLYLINE(horizontalSection6Points);
var horizontalSection6Final = STRUCT(REPLICA(6)([horizontalSection6Polyline,T([1])([1])]));
horizontalGrid.push(horizontalSection6Final);

var horizontalSection7Points = [[1,16],[39,16]];
var horizontalSection7Polyline = POLYLINE(horizontalSection7Points);
horizontalGrid.push(horizontalSection7Polyline);

var horizontalSection8Points = [[1,17],[9,17]];
var horizontalSection8Polyline = POLYLINE(horizontalSection8Points);
var horizontalSection8Final = STRUCT(REPLICA(5)([horizontalSection8Polyline,T([1])([1])]));
horizontalGrid.push(horizontalSection8Final);

elements = elements.concat(horizontalGrid);

// Vertical Grid Lines
var verticalGrid = [];

var verticalSection1Points = [[1,22],[1,10]];
var verticalSection1Polyline = POLYLINE(verticalSection1Points);
var verticalSection1Final = STRUCT(REPLICA(7)([verticalSection1Polyline,T([0])([1])]));
verticalGrid.push(verticalSection1Final);

var verticalSection2bPoints = [[1,0],[1,2]];
var verticalSection2bPolyline = POLYLINE(verticalSection2bPoints);
verticalGrid.push(verticalSection2bPolyline);

var verticalSection2Points = [[2,0],[2,1]];
var verticalSection2Polyline = POLYLINE(verticalSection2Points);
var verticalSection2Final = STRUCT(REPLICA(19)([verticalSection2Polyline,T([0])([1])]));
verticalGrid.push(verticalSection2Final);

var verticalSection3Points = [[8,22],[8,15]];
var verticalSection3Polyline = POLYLINE(verticalSection3Points);
verticalGrid.push(verticalSection3Polyline);

var verticalSection4Points = [[9,17],[9,15]];
var verticalSection4Polyline = POLYLINE(verticalSection4Points);
var verticalSection4Final = STRUCT(REPLICA(15)([verticalSection4Polyline,T([0])([1])]));
verticalGrid.push(verticalSection4Final);

var verticalSection5Points = [[8,14],[8,10]];
var verticalSection5Polyline = POLYLINE(verticalSection5Points);
var verticalSection5Final = STRUCT(REPLICA(13)([verticalSection5Polyline,T([0])([1])]));
verticalGrid.push(verticalSection5Final);

var verticalSection6Points = [[21,14],[21,0]];
var verticalSection6Polyline = POLYLINE(verticalSection6Points);
var verticalSection6Final = STRUCT(REPLICA(3)([verticalSection6Polyline,T([0])([1])]));
verticalGrid.push(verticalSection6Final);

var verticalSection7Points = [[24,17],[24,0]];
var verticalSection7Polyline = POLYLINE(verticalSection7Points);
var verticalSection7Final = STRUCT(REPLICA(13)([verticalSection7Polyline,T([0])([1])]));
verticalGrid.push(verticalSection7Final);

var verticalSection8Points = [[37,0],[37,1]];
var verticalSection8Polyline = POLYLINE(verticalSection8Points);
var verticalSection8Final = STRUCT(REPLICA(2)([verticalSection8Polyline,T([0])([1])]));
verticalGrid.push(verticalSection8Final);

var verticalSection9Points = [[37,17],[37,4]];
var verticalSection9Polyline = POLYLINE(verticalSection9Points);
var verticalSection9Final = STRUCT(REPLICA(2)([verticalSection9Polyline,T([0])([1])]));
verticalGrid.push(verticalSection9Final);

var verticalSection10Points = [[39,16],[39,4]];
var verticalSection10Polyline = POLYLINE(verticalSection10Points);
var verticalSection10Final = STRUCT(REPLICA(9)([verticalSection10Polyline,T([0])([1])]));
verticalGrid.push(verticalSection10Final);

var verticalSection11Points = [[47,5],[47,4]];
var verticalSection11Polyline = POLYLINE(verticalSection11Points);
var verticalSection11Final = STRUCT(REPLICA(4)([verticalSection11Polyline,T([0])([1])]));
verticalGrid.push(verticalSection11Final);

var verticalSection12Points = [[51,6],[51,4]];
var verticalSection12Polyline = POLYLINE(verticalSection12Points);
verticalGrid.push(verticalSection12Polyline);

var verticalSection13Points = [[8,15],[8,89/6]];
var verticalSection13Polyline = POLYLINE(verticalSection13Points);
var verticalSection13Final = STRUCT(REPLICA(15)([verticalSection13Polyline,T([0])([1])]));
verticalGrid.push(verticalSection13Final);

var verticalSection14Points = [[8,14],[8,85/6]];
var verticalSection14Polyline = POLYLINE(verticalSection14Points);
var verticalSection14Final = STRUCT(REPLICA(15)([verticalSection14Polyline,T([0])([1])]));
verticalGrid.push(verticalSection14Final);

elements = elements.concat(verticalGrid);

// Ladders (3 x 0.36)
var steps = [];

var stepsPoints = [[36.36,1],[36.36,4]];
var stepsPolyline = POLYLINE(stepsPoints);
var stepsFinal = STRUCT(REPLICA(7)([stepsPolyline,T([0])([.36])]));
steps.push(stepsFinal);

var singleLinePoints = [[36,2.5],[36.36,2.5]];
var singleLinePolyline = POLYLINE(singleLinePoints);
var singleLineFinal = STRUCT(REPLICA(4)([singleLinePolyline,T([0])([.72])]));
steps.push(singleLineFinal);

var firstLinePoints = [[36.36,2],[36.72,2]];
var firstLinePolyline = POLYLINE(firstLinePoints);
var secondLinePoints = [[36.36,3],[36.72,3]];
var secondLinePolyline = POLYLINE(secondLinePoints);
var doubleLinePolyline = STRUCT([firstLinePolyline,secondLinePolyline]);
var doubleLineFinal = STRUCT(REPLICA(4)([doubleLinePolyline,T([0])([.72])]));
steps.push(doubleLineFinal);

elements = elements.concat(steps);

// Bench (0.66 x 14.40)
var bench = [];

var benchPoints = [[7.8,85/6],[23.2,85/6],[23.2,89/6],[7.8,89/6],[7.8,85/6]];
var benchPolyline = POLYLINE(benchPoints);
bench.push(benchPolyline);

var benchElementsPoints = [[10.2,85/6],[10.2,89/6]];
var benchElementsPolyline = POLYLINE(benchElementsPoints);
var benchElementsFinal = STRUCT(REPLICA(6)([benchElementsPolyline,T([0])([2.13])]));
bench.push(benchElementsFinal);

elements = elements.concat(bench);

// Left Wall (0.2 depth)
var leftWallPoints = [[8,1],[8,.8],[.8,.8],[.8,22.2],[9.2,22.2],[9.2,16.8],[9,16.8],[9,22],[1,22],[1,1],[8,1]];
var leftWallPolyline = POLYLINE(leftWallPoints);
elements = elements.concat(leftWallPolyline);

// Bench Wall (0.2 depth)
var benchWallPoints = [[7.5,15],[26.5,15],[26.5,15.2],[7.5,15.2],[7.5,15]];
var benchWallPolyline = POLYLINE(benchWallPoints);
elements = elements.concat(benchWallPolyline);

// Right Wall (0.2 depth)
var rightWallPoints = [[41.5,4.8],[51.2,4.8],[51.2,16.2],[37.5,16.2],[37.5,16],[51,16],[51,5],[41.5,5],[41.5,4.8]];
var rightWallPolyline = POLYLINE(rightWallPoints);
elements = elements.concat(rightWallPolyline);

// Inner Walls (0.2 depth)
var middleWallPoints = [[33.8,7.4],[33.8,7.6],[25.2,7.6],[25.2,7.4],[33.8,7.4]];
var middleWallPolyline = POLYLINE(middleWallPoints);
elements = elements.concat(middleWallPolyline);

var innerWallPoints = [[42.5,11.4],[42.5,11.6],[37.5,11.6],[37.5,11.4],[42.5,11.4]];
var innerWallPolyline = POLYLINE(innerWallPoints);
elements = elements.concat(innerWallPolyline);

// Exhibition Room Glass Wall (0.05 depth)
var rightGlassWallPoints = [[44.6,6.8],[44.65,6.8],[44.65,14.2],[44.6,14.2],[44.6,6.8]];
var rightGlassWallPolyline = POLYLINE(rightGlassWallPoints);
elements = elements.concat(rightGlassWallPolyline);

var lowerExhibitionGlassWallPoints = [[41.5,5],[30.05,5],[30.05,7.4],[30,7.4],[30,4.95],[41.5,4.95],[41.5,5]];
var lowerExhibitionGlassWallPolyline = POLYLINE(lowerExhibitionGlassWallPoints);
elements = elements.concat(lowerExhibitionGlassWallPolyline);

var upperExhibitionGlassWallPoints = [[40,16],[40,13.65],[30,13.65],[30,13.60],[40.05,13.60],[40.05,16],[40,16]];
var upperExhibitionGlassWallPolyline = POLYLINE(upperExhibitionGlassWallPoints);
elements = elements.concat(upperExhibitionGlassWallPolyline);

var scrollingGlassDoorPoints = [[31,7.6],[31.05,7.6],[31.05,13.6],[31,13.6],[31,7.6]];
var scrollingGlassDoorPolyline = POLYLINE(scrollingGlassDoorPoints);
var scrollingGlassDoorContentPoints = [[31.2,7.7],[31.2,10.5]]; // 13.5
var scrollingGlassDoorContentPolyline = POLYLINE(scrollingGlassDoorContentPoints);
var scrollingGlassDoorContentSemiFinal = STRUCT(REPLICA(3)([scrollingGlassDoorContentPolyline,T([0])([0.3])]));
var scrollingGlassDoorContentFinal = STRUCT(REPLICA(2)([scrollingGlassDoorContentSemiFinal,T([1])([3])]));
var scrollingGlassDoorFinal = STRUCT(REPLICA(2)([scrollingGlassDoorPolyline,T([0])([.95])]));
var scrollingGlassFinal = STRUCT([scrollingGlassDoorFinal,scrollingGlassDoorContentFinal]);

elements = elements.concat(scrollingGlassFinal);

// Rest Room Glass Wall
var lowerLeftRestGlassWallPoints = [[1,17],[7,17],[7,16.95],[1,16.95],[1,17]];
var lowerLeftRestGlassWallPolyline = POLYLINE(lowerLeftRestGlassWallPoints);
elements = elements.concat(lowerLeftRestGlassWallPolyline);

var lowerRightRestGlassWallPoints = [[8,17],[9,17],[9,16.95],[8,16.95],[8,17]];
var lowerRightRestGlassWallPolyline = POLYLINE(lowerRightRestGlassWallPoints);
elements = elements.concat(lowerRightRestGlassWallPolyline);

// Rest Room Wood Wall
var lowerWoodPanelPoints = [[4.95,17],[4.95,19],[5.05,19],[5.05,17],[4.95,17]];
var lowerWoodPanelPolyline = POLYLINE(lowerWoodPanelPoints);
elements = elements.concat(lowerWoodPanelPolyline);

var upperWoodPanelPoints = [[4.95,22],[4.95,20],[5.05,20],[5.05,20.6],[5.8,20.6],[5.8,20.7],[5.05,20.7],[5.05,22],[4.95,22]];
var upperWoodPanelPolyline = POLYLINE(upperWoodPanelPoints);
elements = elements.concat(upperWoodPanelPolyline);

var rightWoodPanelPoints = [[6.6,20.6],[6.6,20.7],[6.95,20.7],[6.95,21],[7.05,21],[7.05,20.7],[9,20.7],[9,20.6],[6.6,20.6]];
var rightWoodPanelPolyline = POLYLINE(rightWoodPanelPoints);
elements = elements.concat(rightWoodPanelPolyline);

var topWoodPanelPoints = [[6.95,21.8],[6.95,22],[7.05,22],[7.05,21.8],[6.95,21.8]];
var topWoodPanelPolyline = POLYLINE(topWoodPanelPoints);
elements = elements.concat(topWoodPanelPolyline);

var windowRestRoomPoints = [[9,17 + (5 / 3)],[9.2,17 + (10 / 3)],[9,17 + (10 / 3)],[9.2,17 + (5 / 3)],[9,17 + (5 / 3)]];
var windowRestRoomPolyline = POLYLINE(windowRestRoomPoints);
elements = elements.concat(windowRestRoomPolyline);

// Pillars
var pillarPoints = [[25.85,6.95],[25.95,6.95],[25.95,6.85],[26.05,6.85],[26.05,6.95],[26.15,6.95],[26.15,7.05],[26.05,7.05],[26.05,7.15],[25.95,7.15],[25.95,7.05],[25.85,7.05],[25.85,6.95]];
var pillarPolyline = POLYLINE(pillarPoints);
var pillarsLine = STRUCT(REPLICA(4)([pillarPolyline,T([0])([6 + 1/3])]));
var pillarsFinal = STRUCT(REPLICA(2)([pillarsLine,T([1])([7])]));
elements = elements.concat(pillarsFinal);

var plan = STRUCT(elements);

DRAW(COLOR([0,0,0])(plan));