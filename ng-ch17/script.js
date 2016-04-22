User.get(fromId)
.then(function(user){
	return user.friends.find(toId);
},function(err){
	//Failed to find the user
})
.then(function(friend){
	return user.sendMessage(find,message);
},function(err){
	//Exception when return the friends
})
.then(function(success){
	//user was sent the message
},function(err){
	//error
});

