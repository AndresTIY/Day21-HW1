
export default function app() {
	console.log('all your codes are belong to us')
}
//----------------------GLOBAL VARIABLES--------------------
var $enterChat = $('#enter-chat');
var $userCard = $('.user-card');
const $chatCard = $('.chat-card');
const urlChat = 'http://tiny-za-server.herokuapp.com/collections/dres-chat';
const delBtn = '<button class="delete-one" type="button" name="button">X</button>';
const $delOne = $('.delete-one');


//-----------------Moment ------------------
var moment = require('moment');


//-------------------Constructors---------------
function Session(){
	this.username = name;
};
const currentSession = new Session();

function Message(id, timestamp, sender, body){
	this.id = id;
	this.timestamp = timestamp;
	this.sender = sender;
	this.body = body;
};
const messageConst = new Message();

//-------------------Prototypes---------------

Message.prototype.save = function(){
	//some code that saves message
};

Message.prototype.delete = function(id){
	$.ajax({
		type: 'DELETE',
		url: `${urlChat}/${id}`
	});
};



// 	console.log('delete button works');
// })
//-------------------Make Delete Button per Message---------------
$('.chat-box').on('click', '.delete-one', function(e){

	console.log('it clicks but won\'t delete');
	console.log('but these buttons only show up when you are logged in under your user name!');


})

//-------------------Enter chat button click---------------
$enterChat.on('click', function(e){
	$userCard.addClass('hide');
	currentSession.username = $('.username-input').val()
	$chatCard.removeClass('hide');
	$('#user-name-text').text(currentSession.username)
	postAll();
})


//-----------------------------Input MSG into chat box-----------------------------

const $chatBox = $('.chat-box')
const $enterMsg = $('#enter-msg');
const $inputMsg = $('#input-msg');

$enterMsg.on('click', function(e){
	const timeStamp = moment().format('M/D/YYYY, h:mm:ssa');
	const $msg = $inputMsg.val();
	const uTag = `<p> ${delBtn} ${currentSession.username} (${timeStamp}): ${$msg}</p>`;
	$chatBox.append(uTag);
	messageConst.timestamp = timeStamp;
	messageConst.sender = currentSession.username;
	messageConst.body = $msg;
	// messageConst.id = $.ajax(postSettings).then(function(data, status, xhr){
	// 	return data._id;
	// })
	console.log('enter message button works');
	var postSettings = {
		type: 'POST',
		contentType:'application/json',
		url: urlChat,
		data: JSON.stringify({
			time: timeStamp,
			sender: currentSession.username,
			body: $msg
		})
	}

	$.ajax(postSettings);

})



//--------------------SERVER STUFF
var settings = {
	type: 'GET',
	dataType: 'json',
	url: urlChat
}
//-----------Retrieves data from Server and appends to page--------------------

const postAll = function () {
	$.ajax(settings).then(function(data, status, xhr){
		data.forEach(function(item, i, arr){
			let oldMsgs = $(`<p class="p-base">${delBtn} ${item.sender} (${item.time}): ${item.body} </p>`);
			$chatBox.prepend(oldMsgs);
			if (currentSession.username !== item.sender) {
			oldMsgs.find('.delete-one').addClass('hide');
			oldMsgs.addClass('indent');
			} else
				if (currentSession.username === item.sender) {
					oldMsgs.find(currentSession.username).removeClass('hide');
				};
		});
	});
};


// setInterval(postAll, 2000);



//-------------------------Deletes All from Server-------------------------
$('#delete-all').on('click', function(e){
	$.ajax(settings).then(function(data, status, xhr){
		data.forEach(function(item, i, arr){
			let id = item._id;
			let url = `${urlChat}/${id}`;
			$.ajax({
				type: 'DELETE',
				url: url
			})
		})
	})
})





// //Post to server when clicked, should be place in click function
// var postSettings = {
// 	type: 'POST',
// 	contentType:'application/json',
// 	url: urlChat,
// 	data: JSON.stringify({
// 		time:
// 		sender:
// 		body:
//
// 	})
// }


// $.ajax(settings).then(function(data, status, xhr){
//   data.forEach(function(object, i, arr){
//     // console.log(object.task);
//     var delButton = '<button class="delete" type="button" name="button"><i class="fa fa-times-circle" aria-hidden="true"></i></button>';
//     var taskInTag = '<li class="list-item">'+object.task+delButton+'</li>';
//     $('.list').append(taskInTag)
//   })
// })


// $('.save').on('click', function(e){
//   var taskName = $('.input').val();
//   var postSettings = {
//     type: 'POST',
//     contentType: 'application/json',
//     url: urlZa,
//     data: JSON.stringify ({
//       task: taskName
//     })
//   }
//   $.ajax(postSettings).then(function(data, status, xhr){
//     var delButton = '<button class="delete" type="button" name="button"><i class="fa fa-times-circle" aria-hidden="true"></i></button>'
//     var taskTag = '<li class="list-item">'+ data.task + delButton +'</li>'
//
//     $('.list').prepend(taskTag);
//
//   })
//   $("input").trigger("reset");
// });

// function Message(timestamp, sender, body){
// 	this.timestamp = timestamp;
// 	this.sender = sender;
// 	this.body = body;
// };

//what should message look like?
//username (timestamp): message
//msg.sender (msg.timestamp): msg.body

//-----------GET PULL POST DEL
//-------------------GET
// var settings = {
//   type: 'GET',
//   dataType: 'json',
//   url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
// }
//------------------POST
// var  settings =  {
//   type: 'POST',
//   contentType:'application/json', //for data we're sending
//   url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
//   data: JSON.stringify({ //kinda specific to tiny-za-server
//     name: 'Betty',
//     type: 'magical',
//     color: 'white'
//   })
//
//
// }
//
// $.ajax(settings).then(function(data, status, xhr){
//   console.log(status);
// })


//----------------DEL
// $.ajax(settings).then(function(data, status, xhr){
//   data.forEach(function(unicorn, i, arr){
//     var id = unicorn._id;
//     // console.log(id);
//     var url = 'http://tiny-za-server.herokuapp.com/collections/unicorns/' + id;
//     // console.log(url);
//     $.ajax({
//       type: 'DELETE',
//       url: url
//     })
//-----SPLIT?
    // var deleteSettings = {
    // type: 'DELETE',
    // url:url
  // }
  // $.ajax(deleteSettings); works the same
//   })
// })

//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
