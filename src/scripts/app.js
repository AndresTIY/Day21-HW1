
export default function app() {
	console.log('all your codes are belong to us')
}
//----------------------GLOBAL VARIABLES--------------------
var $enterChat = $('#enter-chat');
var $userCard = $('.user-card');
const $chatCard = $('.chat-card');
const urlChat = 'http://tiny-za-server.herokuapp.com/collections/dres-chat';
// console.log(sesh);

//-----------------Moment Practice
// var moment = require('moment');
// var m = moment().format();
// console.log(m); => 2017-03-28T13:19:43-05:00




//-------------------Constructors
function Session(){
	this.username = name;
};
const sesh = new Session();

function Message(timestamp, sender, body){
	this.timestamp = timestamp;
	this.sender = sender;
	this.body = body;
};
const msg = new Message();
//-------------------Prototypes

Message.prototype.save = function(){
	//some code that saves message
}

Message.prototype.delete = function(){
	//some code that deletes message
}



//-------------------Enter chat button click
$enterChat.on('click', function(e){

	//hide user card
	$userCard.addClass('hide');

	//saves username input

	sesh.username = $('.username-input').val()

	//displays chat card
	$chatCard.removeClass('hide');

	//adds username to user area
	$('#user-name-text').text(sesh.username)
	console.log(sesh);



})
//-----------------------------------------------------------

const $chatBox = $('.chat-box')
//click submit to send msg
const $enterMsg = $('#enter-msg');
const $inputMsg = $('#input-msg');

// function addMsg (){
// 	$('<p>test</p>')
// };

$enterMsg.on('click', function(e){

	const $msg = $inputMsg.val();
	const pTag = '<p>'+$msg+'</p>';
	// $chatBox.append(addMsg(msg));
	$chatBox.append(pTag);

	console.log('y');

})




//--------------------SERVER STUFF
var settings = {
	type: 'GET',
	dataType: 'json',
	url: urlChat
}
$.ajax(settings);

var settingsPost = {
	type: 'POST',
	contentType:'application/json',
	url: urlChat,
	data: JSON.stringify({
		name: "name"
	})
}
$.ajax(settingsPost);

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
