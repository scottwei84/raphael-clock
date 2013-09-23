var rest_hour_angle = 0;
var rest_min_angle = 0;
var rest_second_angle = 0;
var time_zone = 0;
var center_x = 0;
var center_y = 0;


//This function is for drawing static clock when page loaded......
function draw_clock(timeZone){
	time_zone = timeZone;

	//get the position of center on clock.....
	var mydiv = document.getElementById("clock_widget");
	center_x = mydiv.offsetWidth/2;
	center_y = center_x;

	//draw clock.....
	canvas = Raphael("clock_widget");

		//draw the outside large circle......
		var clock_outside_circle_radius = center_x/100*95;
		var clock = canvas.circle(center_x,center_y,clock_outside_circle_radius);
		var stroke_width_for_outside_circle = center_x * 25 /300;
		clock.attr({"fill":"#ffffff","stroke":"#000000","stroke-width":stroke_width_for_outside_circle});

		//draw minute signs;
		var minute_sign;
		var start_y_for_minute_sign = center_x * 40 / 300;
		var end_y_for_minute_sign = center_x * 60 / 300;
		var stroke_width_for_minute_sign = center_x * 0.01;
		for(i=0;i<60;i++){
			if (i % 5 != 0)
			{  
				minute_sign = canvas.path("M"+center_x + ","+start_y_for_minute_sign+"L"+center_x+"," + end_y_for_minute_sign).rotate(6 * i, center_x, center_y);
				minute_sign.attr({"stroke":"#000000","stroke-width":stroke_width_for_minute_sign});
			}
			
		}
		//draw hour signs except for 0,3,6,9......
		var small_hour_sign;
		var small_hour_sign_polygon_position1_x = center_x * 297 / 300;
		var small_hour_sign_polygon_position1_y = center_x * 40 / 300;
		var small_hour_sign_polygon_position2_x = center_x * 1.01;
		var small_hour_sign_polygon_position2_y = center_x * 40 / 300;
		var small_hour_sign_polygon_position3_x = center_x * 1.01;
		var small_hour_sign_polygon_position3_y = center_x * 0.3;
		var small_hour_sign_polygon_position4_x = center_x ;
		var small_hour_sign_polygon_position4_y = center_x * 92 / 300;
		var small_hour_sign_polygon_position5_x = center_x * 297 / 300;
		var small_hour_sign_polygon_position5_y = center_x * 0.3;
		for(i=0;i<12;i++){
			if (i % 3 != 0)
			{
				small_hour_sign = canvas.path("M" +small_hour_sign_polygon_position1_x +","+small_hour_sign_polygon_position1_y+"L"+small_hour_sign_polygon_position2_x+","+small_hour_sign_polygon_position2_y+"L"+small_hour_sign_polygon_position3_x+","+small_hour_sign_polygon_position3_y+"L"+small_hour_sign_polygon_position4_x+","+small_hour_sign_polygon_position4_y+"L"+small_hour_sign_polygon_position5_x+","+small_hour_sign_polygon_position5_y+"z").rotate(30 * i, center_x, center_y);
				small_hour_sign.attr({"stroke":"#000000","fill":"#000000"});
			}
			
		}  


		//draw hour signs such as 0,3,6,9......
		var big_hour_sign;
		var big_hour_sign_polygon_position1_x = center_x * 294 / 300;
		var big_hour_sign_polygon_position1_y = center_x * 40 / 300;
		var big_hour_sign_polygon_position2_x = center_x * 1.02;
		var big_hour_sign_polygon_position2_y = center_x * 40 / 300;
		var big_hour_sign_polygon_position3_x = center_x * 1.02;
		var big_hour_sign_polygon_position3_y = center_x * 0.3;
		var big_hour_sign_polygon_position4_x = center_x ;
		var big_hour_sign_polygon_position4_y = center_x * 94 / 300;
		var big_hour_sign_polygon_position5_x = center_x * 294 / 300;
		var big_hour_sign_polygon_position5_y = center_x * 0.3;
		for(i=0;i<4;i++){
				big_hour_sign = canvas.path("M" +big_hour_sign_polygon_position1_x +","+big_hour_sign_polygon_position1_y+"L"+big_hour_sign_polygon_position2_x+","+big_hour_sign_polygon_position2_y+"L"+big_hour_sign_polygon_position3_x+","+big_hour_sign_polygon_position3_y+"L"+big_hour_sign_polygon_position4_x+","+big_hour_sign_polygon_position4_y+"L"+big_hour_sign_polygon_position5_x+","+big_hour_sign_polygon_position5_y+"z").rotate(90 * i, center_x, center_y);
				big_hour_sign.attr({"stroke":"#000000","fill":"#000000"});
		}    
		//draw hour hand....
		var hour_hand_position1_x = center_x * 0.97;
		var hour_hand_position1_y = center_x * 320 / 300;
		var hour_hand_position2_x = center_x * 0.97;
		var hour_hand_position2_y = center_x * 160 / 300;
		var hour_hand_position3_x = center_x * 280 / 300;
		var hour_hand_position3_y = center_x * 0.5;
		var hour_hand_position4_x = center_x;
		var hour_hand_position4_y = center_x * 110 / 300;
		var hour_hand_position5_x = center_x * 320 / 300;
		var hour_hand_position5_y = center_x * 0.5;
		var hour_hand_position6_x = center_x * 1.03;
		var hour_hand_position6_y = center_x * 160 / 300;
		var hour_hand_position7_x = center_x * 1.03;
		var hour_hand_position7_y = center_x * 320 / 300;
		hour_hand = canvas.path("M"+hour_hand_position1_x+", "+hour_hand_position1_y+"L"+hour_hand_position2_x+", "+hour_hand_position2_y+"C"+hour_hand_position3_x+", "+ hour_hand_position3_y+" "+hour_hand_position4_x+", "+hour_hand_position4_y+" "+hour_hand_position4_x+", "+hour_hand_position4_y+"L"+hour_hand_position4_x+", "+hour_hand_position4_y+"C"+hour_hand_position4_x+", "+hour_hand_position4_y+" " +hour_hand_position5_x+ ", "+ hour_hand_position5_y+ " "+ hour_hand_position6_x+", "+ hour_hand_position6_y+"L"+hour_hand_position7_x+", "+hour_hand_position7_y+"z");
		hour_hand.attr({stroke: "#ffffff","stroke-width": 1,fill:"#000000"});

		//draw minute hand...
		//minute_hand = canvas.path("M293, 325L293, 120C282, 110 300, 70 300, 70L300, 70C300, 70 318, 110 307, 120L307, 325z");
		var minute_hand_position1_x = center_x * 293 / 300;
		var minute_hand_position1_y = center_x * 325 / 300;
		var minute_hand_position2_x = center_x * 293 / 300;
		var minute_hand_position2_y = center_x * 0.4;
		var minute_hand_position3_x = center_x * 282 / 300;
		var minute_hand_position3_y = center_x * 11 / 30;
		var minute_hand_position4_x = center_x;
		var minute_hand_position4_y = center_x * 70 / 300;
		var minute_hand_position5_x = center_x * 318 / 300;
		var minute_hand_position5_y = center_x * 11 / 30;
		var minute_hand_position6_x = center_x * 307 / 300;
		var minute_hand_position6_y = center_x * 0.4;
		var minute_hand_position7_x = center_x * 307 / 300;
		var minute_hand_position7_y = center_x * 325 / 300;
		minute_hand = canvas.path("M"+minute_hand_position1_x+", "+minute_hand_position1_y+"L"+minute_hand_position2_x+", "+minute_hand_position2_y+"C"+minute_hand_position3_x+", "+ minute_hand_position3_y+" "+minute_hand_position4_x+", "+minute_hand_position4_y+" "+minute_hand_position4_x+", "+minute_hand_position4_y+"L"+minute_hand_position4_x+", "+minute_hand_position4_y+"C"+minute_hand_position4_x+", "+minute_hand_position4_y+" " +minute_hand_position5_x+ ", "+ minute_hand_position5_y+ " "+ minute_hand_position6_x+", "+ minute_hand_position6_y+"L"+minute_hand_position7_x+", "+minute_hand_position7_y+"z");
		minute_hand.attr({stroke: "#ffffff","stroke-width": 1,fill:"#000000"});
		//second_hand = canvas.path("M300 330L300 75");
		//second_hand.attr({stroke: "#000000", "stroke-width": 6}); 

		//draw clock pin...
		var pin_radius = center_x * 0.05;
		var pin = canvas.circle(center_x, center_y, pin_radius);
		pin.attr({"fill":"#ffffff","stroke":"#ffffff"});
		pin_radius = center_x * 13 / 300;
		pin = canvas.circle(center_x, center_y, pin_radius)
		pin.attr("fill", "#000000");
	//make clock moviing.....
	update_clock()
	setInterval("update_clock()",1000);
}

//This function is for clock moving.....
function update_clock(){
	//get the time in selected time zone....
	var now = new Date();
	var hours = now.getUTCHours() + time_zone;
	var minutes = now.getUTCMinutes();
	var seconds = now.getUTCSeconds();

	var current_hour_angle = 30*(hours+minutes/60) + rest_hour_angle;
	var current_min_angle = 6*minutes + rest_min_angle;
	var current_second_angle = 6*seconds + rest_second_angle;	
	hour_hand.rotate(current_hour_angle, center_x, center_y);
	minute_hand.rotate(current_min_angle, center_x, center_y);
	//second_hand.rotate(current_second_angle, center_x, center_y);
	rest_hour_angle = 360 - 30*(hours+minutes/60);
	rest_min_angle = 360 - 6*minutes;
	rest_second_angle = 360 - 6*seconds;
	
}