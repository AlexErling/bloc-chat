(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies, $firebaseArray) {
      this.chatRooms = Room.all;
      this.currentRoom = null;
      this.currentRoom = null;
      this.currentUser = $cookies.get('blocChatCurrentUser');

      this.addRoom = function() {
        $uibModal.open({
          templateUrl: "/templates/modal.html",
          controller: 'ModalCtrl',
          controllerAs: 'modal',
        });
      }

      this.setCurrentRoom = function (room) {
        this.currentRoom = room;
        this.messages = Message.getByRoomId(this.currentRoom.$id)
      }

      this.sendMessage = function () {
          this.newMessage.roomId = this.currentRoom.$id;
          this.newMessage.username = this.currentUser;
          this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
          Message.send(this.newMessage);

        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', [ 'Room', '$uibModal', 'Message', '$cookies', '$firebaseArray', HomeCtrl]);
})();
