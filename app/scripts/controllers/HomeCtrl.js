(function() {
    function HomeCtrl(Room, $uibModal) {
      this.chatRooms = Room.all;

      this.addRoom = function() {
        $uibModal.open({
          templateUrl: "/templates/modal.html",
          controller: 'ModalCtrl',
          controllerAs: 'modal',
        });
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', [ 'Room', '$uibModal', HomeCtrl]);
})();
