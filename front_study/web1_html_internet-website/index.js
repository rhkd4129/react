var Links= {
    setColor:function(color){
    //a_tag  = document.querySelectorAll('a');
    //var i =0;
    //while(i<a_tag.length ){
    //  a_tag[i].style.color=color;
    //  i=+i+1;
    //    }
    $('a').css('color',color);
    }
}

var Body ={
  setColor:function(color){
    //cument.querySelector('body').style.color = color;
    $('body').css('color',color);
  },

  setbackgraoundColor:function(color){
  //document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor',color);
}

}

function nightDayHandler(self){
    if (self.value ==='night'){
      self.value='day';
    Body.setbackgraoundColor('black')
    Body.setColor('white');
    Links.setColor('powderblue');
    }else {
      self.value='night';
      Body.setbackgraoundColor('white')
      Body.setColor('black');
      Links.setColor('blue');
    }
  }