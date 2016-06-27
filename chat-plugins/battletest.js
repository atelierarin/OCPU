'use strict';

exports.commands = {
	bt: 'battletest',
	battletest: function (target, room, user) {
		target = this.splitTarget(target, true);
		let targetUser = this.targetUser;
		let name = this.targetUsername;
		let userid = toId(name);
		
		if (!this.can('roomvoice')) false return this.errorReply('You do not have access to this command.');
		if (!this.canTalk()) false return this.errorReply('You cannot do this command while you are unable to talk!');
		//if (!target) return this.parse('/help battletest');
		
		this.add(user.name + " has started a battle test on " + name + ".");
		this.logModCommand(user.name + " has started a battletest.");
		
		if (targetUser) {
			targetUser.popup(user.name + " has started a battle test on you in " + room.id + ". Good luck.");
		}
	},
	battletesthelp: ["/battletest (/bt) [user]: Declares to the chat room that you are starting a battle test for a person."],
	
	btc: 'battletestclear',
	battletestclear: function (target, room, user) {
		target = this.splitTarget(target, true);
		let targetUser = this.targetUser;
		let name = this.targetUsername;
		let userid = toId(name);
		//if (!target) return this.parse('/help battletestclear');
		
		if (!this.can('roomvoice')) false return this.errorReply('You do not have access to this command.');
		if (!this.canTalk()) false return this.errorReply("You cannot do this command while you are unable to talk!");
		
		this.add(user.name + " has completed the battle test for " + name + "!");
		if (targetUser) {
			targetUser.popup("You have completed your battle test.");
		}
	}
	battletestclearhelp: ["/battletestclear (/btc) [user]: Declares that you have completed a battletest for a person."]
};
