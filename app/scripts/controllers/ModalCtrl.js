(function() {
    function ModalCtrl($uibModalInstance, Room, $cookies) {

      this.submit = function() {
        Room.add(this.newRoom);
        $uibModalInstance.close();
      };


      this.cancel = function() {
        $uibModalInstance.close();
      };

      this.createUsername = function () {
          $cookies.put('blocChatCurrentUser', this.username);
          $uibModalInstance.close();
      }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', '$cookies', ModalCtrl]);
})();
