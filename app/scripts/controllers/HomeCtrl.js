(function() {
    function HomeCtrl(Room, $uibModal, Message) {
      this.chatRooms = Room.all;
      this.currentRoom = null;

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

      home.sendMessage = function () {
          home.newMessage.roomId = home.currentRoom.$id;
          home.newMessage.username = home.currentUser;
          Message.send(home.newMessage);
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', [ 'Room', '$uibModal', 'Message', HomeCtrl]);
})();
