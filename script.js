var elButton = document.getElementById("button");
var elUl = document.getElementById("ul");
var elMessage = document.getElementById("message");
var elComplete = document.getElementById("complete");

elButton.addEventListener("click", function() {

  var List = {

    listItem: document.getElementById("text").value,

    addListItem: function() {
      return this.listItem;
    },
    
    warnUser: function(){
    	return "Please write a task";
    },
	
	completeTask: function(){
		return "Click task to compelete it";
	}

  };

  if (!List.listItem) {
	elMessage.innerHTML = List.warnUser();
    $("#message").show();
	$("#message").fadeOut(1000);
  } else {
  	elUl.innerHTML += "<li>" + List.addListItem() + "</li>";
	
	elComplete.innerHTML = List.completeTask();
	$("#complete").show();
	$("#complete").fadeOut(3000);
  }

  $("li").click(function(){
  	$(this).fadeOut("slow");
  });
	
});
