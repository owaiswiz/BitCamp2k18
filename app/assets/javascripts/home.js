/* global TimelineMax */
/* global $ */
function handleSvgAnimation(){ // eslint-disable-line no-unused-vars 
  //master timeline, repeat infinite (-1), 0s delay between iteration
  var master = new TimelineMax({repeat: 0, repeatDelay: 2});

  //if waiting --> invisible, labels from Affinity Designer

  //Console
  master.set('.Console', {visibility : "hidden"});

  master.set('.Green-Line-1', {visibility : "hidden"});

  master.set('.Green-Line-3', {visibility : "hidden"});

  master.set('.Green-Line-4', {visibility : "hidden"});

  master.set('.Green-Line-5', {visibility : "hidden"});

  master.set('.Yellow-Line-1', {visibility : "hidden"});

  master.set('.Yellow-Line-2', {visibility : "hidden"});

  master.set('.Yellow-Line-4', {visibility : "hidden"});

  master.set('.Red-Line-1', {visibility : "hidden"});

  master.set('.Red-Line-2', {visibility : "hidden"});

  master.set('.Red-Line-4', {visibility : "hidden"});

  master.set('.Blue-Line-2', {visibility : "hidden"});

  master.set('.Blue-Line-3', {visibility : "hidden"});

  master.set('.Blue-Line-5', {visibility : "hidden"});

  //Donuts
  master.set('.Stationary-Donut', {visibility : "hidden"});
  master.set('.Runner-Donut', {visibility : "hidden"});

  //Logo
  master.set('.Logo', {visibility : "hidden"});

  //Track
  master.set('.Track', {visibility : "hidden"});

  //Timer Related fields
  master.set('#Timer',{visibility: "hidden"});

  master.add(scene1(), "scene1");
  master.add(scene2(), "scene2");
  master.add(scene3(), "scene3");
  master.add(scene4(), "scene4");
  master.add(scene5(), "scene5");

  //scene1 -> Track
  function scene1 () {
    var subtimeline = new TimelineMax();

    master.set(".Track", {visibility: "visible"}, "+=0.5");

    subtimeline.fromTo(".Track", 0.7, {scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "+=0.5");

    return subtimeline;
  }

  //scene2 -> Donut & Console
  function scene2 () {
    var subtimeline = new TimelineMax();

    master.set('.Stationary-Donut', {visibility: "visible"});

    subtimeline.fromTo(".Stationary-Donut", 0.4, {scale: 0, transformOrigin: "center"},{scale: 1.3, transformOrigin: "center"});

    subtimeline.to(".Stationary-Donut", 0.4, {scale: 1, transformOrigin: "center"});

    master.set(".Console", {visibility: "visible"});

    subtimeline.fromTo(".Console", 0.5,{y: 300, transformOrigin: "bottom"}, {y: 0, transformOrigin: "bototm"}, "-=0.8");

    return subtimeline;
  }

  //scene3 -> Console Lines
  function scene3 () {
    var subtimeline = new TimelineMax();

    master.set(".Yellow-Line-1", {visibility: "visible"});

    subtimeline.fromTo(".Yellow-Line-1", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.5");

    master.set(".Green-Line-1", {visibility: "visible"});

    subtimeline.fromTo(".Green-Line-1", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Red-Line-1", {visibility: "visible"});

    subtimeline.fromTo(".Red-Line-1", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Blue-Line-2", {visibility: "visible"});

    subtimeline.fromTo(".Blue-Line-2", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Red-Line-2", {visibility: "visible"});

    subtimeline.fromTo(".Red-Line-2", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Yellow-Line-2", {visibility: "visible"});

    subtimeline.fromTo(".Yellow-Line-2", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Green-Line-3", {visibility: "visible"});

    subtimeline.fromTo(".Green-Line-3", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Blue-Line-3", {visibility: "visible"});

    subtimeline.fromTo(".Blue-Line-3", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Red-Line-4", {visibility: "visible"});

    subtimeline.fromTo(".Red-Line-4", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Yellow-Line-4", {visibility: "visible"});

    subtimeline.fromTo(".Yellow-Line-4", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Green-Line-4", {visibility: "visible"});

    subtimeline.fromTo(".Green-Line-4", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Blue-Line-5", {visibility: "visible"});

    subtimeline.fromTo(".Blue-Line-5", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    master.set(".Green-Line-5", {visibility: "visible"});

    subtimeline.fromTo(".Green-Line-5", 0.5,{scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"}, "-=0.4");

    return subtimeline;
  }

  //scene4 -> Donut Run
  function scene4 () {
    var subtimeline = new TimelineMax();

    master.set(".Stationary-Donut", {visibility: "hidden"});

    master.set(".Runner-Donut", {visibility: "visible"});

    subtimeline.fromTo(".Runner-Donut", 2, {x: -120, transformOrigin: "left"}, {x: 700, transformOrigin: "left"});

    return subtimeline;
  }

  //scene5 -> Logo
  function scene5 () {
    var subtimeline = new TimelineMax();

    countdown();
    master.set(".Logo", {visibility: "visible"});

    subtimeline.fromTo(".Logo", 1, {opacity: 0, transformOrigin: "center"}, {opacity: 1, transformOrigin: "center"});
    subtimeline.fromTo(".Logo", 0.5, {y: 0}, {y: -125},1);

    subtimeline.to("#Timer",0,{visibility: "visible"},1);
    subtimeline.fromTo("#Timer", 0.5, {y: 125}, {y: 0}, 1);

    subtimeline.fromTo(".Console", 0.5,{y: 0, transformOrigin: "bottom"}, {y: 300, transformOrigin: "top"}, "-=0.5");

    return subtimeline;
  }

}

function countdown() {
  var now = new Date();
  var eventDate = new Date(2018, 2, 24,9,0,0,0);
  var currentTime = now.getTime();
  var evenTime = eventDate.getTime();

  var remTime = evenTime - currentTime;

  var sec = Math.floor(remTime / 1000);
  var min = Math.floor(sec / 60);
  var hour = Math.floor(min / 60);
  var day = Math.floor(hour / 24);

  hour %= 24;
  min %= 60;
  sec %= 60;

  hour = (hour < 10) ? "0" + hour : hour;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;

  $('#SecondTimer text')[0].innerHTML = sec;
  $('#MinuteTimer text')[0].innerHTML = min;
  $('#HourTimer text')[0].innerHTML = hour;
  $('#DayTimer text')[0].innerHTML = day;

  setTimeout(countdown, 1000);
}

function handleReadMoreModal() { // eslint-disable-line no-unused-vars 
  $('#testimonial-readmore-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var name = button.data('name');
    var text = button.data('text');
    var modal = $(this);
    modal.find('.modal-title').html(name);
    modal.find('.modal-body blockquote p').html(text);
  });
}

function handleFaqToggle() { // eslint-disable-line no-unused-vars 
  $('.question').off('click.homejs').on('click.homejs',function() {
    var isCurrentlyClicked = $(this).find('.question-icon').hasClass('clicked');
    var $questionContainer = $(this).closest('.container');
    $questionContainer.find('.question-icon').removeClass('clicked');
    $questionContainer.find('.question-answer').removeClass('clicked');

    if(!isCurrentlyClicked) {
      $(this).find('.question-icon').addClass('clicked');
      $(this).find('.question-answer').addClass('clicked').animateCss('jello');
    }
  });
}
