(function () {
  farmOS.map.behaviors.farm_map_vhf = {
    attach: function (instance) {

      // Add Sept 2019 layer
      var opts = {
        title: 'Sept 2019',
        url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/DroneSept19/{z}/{x}/{y}.jpg',
        group: 'Base layers',
		visible: false,
		base: false,
      };

      instance.addLayer('xyz', opts);

	  var mar2020 = {
		  title: 'March 2020',
		  url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/march2020/{z}/{x}/{y}.png',
		  group: 'Base layers',
		  visible: false,
		  base: false,

	  };
	  instance.addLayer('xyz',mar2020);

    var apr2020 = {
      title: 'April 2020',
      url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/April2020/{z}/{x}/{y}.png',
      group: 'Base layers',
      visible: false,
      base: false,

    };
    instance.addLayer('xyz',apr2020);

        var may2020 = {
          title: '3rd May 2020',
          url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/May2020/{z}/{x}/{y}.png',
          group: 'Base layers',
          visible: false,
          base: false,

        };
    instance.addLayer('xyz',may2020);

    var june2020 = {
      title: '2nd June 2020',
      url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/June2020/{z}/{x}/{y}.png',
      group: 'Base layers',
      visible: false,
      base: false,

    };
instance.addLayer('xyz',june2020);

var july2020 = {
  title: '12th July 2020',
  url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/july2020/{z}/{x}/{y}.png',
  group: 'Base layers',
  visible: false,
  base: false,

};
instance.addLayer('xyz',july2020);

var august2020 = {
  title: '11th August 2020',
  url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/august2020/{z}/{x}/{y}.png',
  group: 'Base layers',
  visible: false,
  base: false,

};
instance.addLayer('xyz',august2020);

var sept2020 = {
  title: '19th September 2020',
  url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/sept2020/{z}/{x}/{y}.png',
  group: 'Base layers',
  visible: false,
  base: false,

};
instance.addLayer('xyz',sept2020);

var nov2020 = {
  title: '7th November 2020',
  url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/nov2020a/{z}/{x}/{y}.png',
  group: 'Base layers',
  visible: false,
  base: false,

};
instance.addLayer('xyz',nov2020);

var jan2021 = {
  title: '9th January 2021',
  url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/jan2021/{z}/{x}/{y}.png',
  group: 'Base layers',
  visible: false,
  base: false,

};
instance.addLayer('xyz',jan2021);

var feb2021 = {
  title: '22nd Feb 2021',
  url: 'https://home.skipper-iwb.co.uk/webmapserver/tileserver.php/feb2021/{z}/{x}/{y}.png',
  group: 'Base layers',
  visible: true,
  base: false,

};
instance.addLayer('xyz',feb2021);


    },
  };
}());
