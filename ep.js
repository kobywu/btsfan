
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




//http://goker12.blogspot.com/2014/11/how-to-add-multiple-slideshows-on-one.html
var SlideList1 = ['2cool/jhope1.jpeg',
			'2cool/jimin1.jpeg',
			'2cool/jin1.jpeg',
			'2cool/suga1.jpeg',
			'2cool/v1.jpeg',
			'2cool/rm1.jpeg',
			'2cool/jungkook1.jpeg',
			'2cool/jhope2.jpeg',
			'2cool/jimin2.jpeg',
			'2cool/jin2.jpeg',
			'2cool/suga2.jpeg',
			'2cool/v2.jpeg',
			'2cool/rm2.jpeg',
			'2cool/jungkook2.jpeg',
			'2cool/jhope3.jpeg',
			'2cool/jimin3.jpeg',
			'2cool/jin3.jpeg',
			'2cool/suga3.jpeg',
			'2cool/v3.jpeg',
			'2cool/rm3.jpeg',
			'2cool/jungkook3.jpeg'];
var SlideShow1 = new SlideShow(SlideList1, 'slide1', 3000, "SlideShow1");
var SlideList2 = ["orul/jhope1.jpeg",
			'orul/jimin1.jpeg',
			'orul/v1.jpeg',
			'orul/jungkook1.jpeg',
			'orul/rm1.jpeg',
			'orul/suga1.jpeg',
			'orul/jin1.jpeg',
			'orul/jhope2.jpeg',
			'orul/jimin2.jpeg',
			'orul/v2.jpeg',
			'orul/jungkook2.jpeg',
			'orul/rm2.jpeg',
			'orul/suga2.jpeg',
			'orul/jin2.jpeg',
			'orul/jhope3.jpeg',
			'orul/jungkook3.jpeg',
			'orul/rm3.jpeg',
			'orul/suga3.jpeg'];
var SlideShow2 = new SlideShow(SlideList2, 'slide2', 1000, "SlideShow2");
var SlideList3 = ['skool/jhope1.jpeg',
			'skool/jimin1.jpg',
			'skool/jin1.jpg',
			'skool/suga1.jpeg',
			'skool/v1.jpg',
			'skool/rm1.jpeg',
			'skool/jungkook1.jpeg',
			'skool/jhope2.jpeg',
			'skool/jimin2.jpeg',
			'skool/jin2.jpeg',
			'skool/suga2.jpeg',
			'skool/v2.jpeg',
			'skool/rm2.jpg',
			'skool/jungkook2.jpg',
			'skool/1.jpeg',
			'skool/2.jpeg',
			'skool/3.jpeg',
			'skool/4.jpeg'];
var SlideShow3 = new SlideShow(SlideList3, 'slide3', 3000, "SlideShow3");
function SlideShow(slideList, image, speed, name)          
{
  this.slideList = slideList;
  this.image = image;
  this.speed = speed;
  this.name = name;
  this.current = 0;
  this.timer = 0;
}
function switchImage(imgName, imgSrc) 
{
  if (document.images)
  {
    if (imgSrc != "none")
    {
      document.images[imgName].src = imgSrc;
    }
  }
}
SlideShow.prototype.play = SlideShow_play;  
function SlideShow_play()       
{
  with(this)
  {
    if(current++ == slideList.length-1) current = 0;
    switchImage(image, slideList[current]);
    clearTimeout(timer);
    timer = setTimeout(name+'.play()', speed);
  }
}
window.onLoad=SlideShow1.play();SlideShow2.play();SlideShow3.play();
