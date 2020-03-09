(function () {
  farmOS.map.behaviors.farm_map_vhf = {
    attach: function (instance) {

      // Add Sept 2019 layer
      var opts = {
        title: 'Sept 2019',
        url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/DroneSept19/{z}/{x}/{y}.jpg',
        group: 'Base layers',
      };
      instance.addLayer('xyz', opts);
    },
  };
}());
