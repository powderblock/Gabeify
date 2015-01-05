javascript: function GabeN(ratio, imageurl) {
  this.ratio = ratio;
  this.imageurl = imageurl
}

var getGabeN = {
  init: function(myGabeN) {
    this.myGabeN = myGabeN
  },
  horizontal: function() {
    return this.myGabeN.filter(function(myGabeN) {
      return myGabeN.ratio === "horizontal"
    })
  },
  vertical: function() {
    return this.myGabeN.filter(function(myGabeN) {
      return myGabeN.ratio === "vertical"
    })
  },
  square: function() {
    return this.myGabeN.filter(function(myGabeN) {
      return myGabeN.ratio === "square"
    })
  }
};

function Randomize(images) {
  return Math.floor(Math.random() * images.length)
}

var myGabeN = [
new GabeN("horizontal", "http://i.imgur.com/uLMbKmj.jpg"), 
new GabeN("horizontal", "http://i.imgur.com/5DXQ7tx.jpg"), 
new GabeN("horizontal", "http://i.imgur.com/dldrXOf.jpg"), 
new GabeN("horizontal", "http://i.imgur.com/8uH9TQb.jpg"), 
new GabeN("horizontal", "http://i.imgur.com/7wU40jQ.jpg"), 
new GabeN("horizontal", "http://i.imgur.com/ajxvdWo.jpg"), 
new GabeN("vertical", "http://i.imgur.com/aRCPVmX.jpg"), 
new GabeN("vertical", "http://i.imgur.com/FU2unZO.jpg"), 
new GabeN("vertical", "http://i.imgur.com/3brJDRx.jpg"), 
new GabeN("vertical", "http://i.imgur.com/j9KOnWm.jpg"), 
new GabeN("square", "http://i.imgur.com/sWCcEwV.jpg"), 
new GabeN("square", "http://i.imgur.com/ecbdpfL.jpg"), 
new GabeN("square", "http://i.imgur.com/lDkMf5P.jpg"), 
new GabeN("square", "http://i.imgur.com/qkcP48v.jpg")];

function imageRatio(image) {
  var proportion = image.height / image.width;
  if (proportion > 1) return "vertical";
  else if (proportion === 1) return "square";
  else if (proportion < 1) return "horizontal"
  }(function(document) {
    getGabeN.init(myGabeN);
    var images = document.getElementsByTagName("img"),
    length = images.length;
    for (var i = 0; i < length; i++) {
      var ratio = imageRatio(images[i]);
      if (ratio === "horizontal") {
        var number = Randomize(getGabeN.horizontal());
        var img = getGabeN.horizontal()[number];
        images[i].src = img.imageurl
      } else if (ratio === "square") {
        var number = Randomize(getGabeN.square());
        var img = getGabeN.square()[number];
        images[i].src = img.imageurl
      } else if (ratio === "vertical") {
        var number = Randomize(getGabeN.vertical());
        var img = getGabeN.vertical()[number];
        images[i].src = img.imageurl
      }
    }
  })(document);
