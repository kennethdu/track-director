$(document).ready(function(){


    $("button#btn").click(function() {

      var add = function(answer, answer2, answer3, answer4, answer5) {
        return answer + answer2 + answer3 + answer4 + answer5;
};

		var answer = parseInt($("input:radio[name='question1']:checked").val());
		var answer2 = parseInt($("input:radio[name='question2']:checked").val());
		var answer3 = parseInt($("input:radio[name='question3']:checked").val());
		var answer4 = parseInt($("input:radio[name='question4']:checked").val());
		var answer5 = parseInt($("input:radio[name='question5']:checked").val());
		var result = parseInt(add(answer, answer2, answer3, answer4, answer5).toString());
      
	  
	  
		if (result===5 || result==6 || result==7) {
		alert("YOU SHOULD STUDY React");
		.show(#react)
		} 

		else if (result === 8) {
		alert("YOU SHOULD STUDY Ruby");
		}

		else if (result === 9) {
		alert("YOU SHOULD STUDY .Net");

		}



      $("#output").text(result);



});});