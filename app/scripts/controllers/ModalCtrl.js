(function() {
    function ModalCtrl($uibModalInstance, Room) {

      this.submit = function() {
        Room.add(this.newRoom);
        $uibModalInstance.close();
      };


      this.cancel = function() {
        $uibModalInstance.close();
      };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
