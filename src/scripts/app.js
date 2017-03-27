
export default function app() {
	console.log('all your codes are belong to us')
}
//----------------------GLOBAL VARIABLES--------------------
var $enterChat = $('#enter-chat');
var $userCard = $('.user-card');
const $chatCard = $('.chat-card');
// console.log($chatCard);



$enterChat.on('click', function(e){

	//hide user card
	$userCard.addClass('hide');

	//saves username input

	//displays chat card
	$chatCard.removeClass('hide');

	console.log('yay');

})

var a = 'andres';
moment().format('h:mm:ss a')
