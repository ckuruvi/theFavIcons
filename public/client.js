var likeWho = "";

$(function(){
  console.log('doc loaded');
  getBios();

  $('#bios').on('click', '.like', function(event){
    likeWho = $(this).attr('id');
    likeWho='/likes/'+likeWho;
    likeMe();
  })
});


function getBios(){
  $.ajax({
    url: '/bios',
    type: 'GET',
    success: displayBios
  });
}
  function displayBios(bios){
  // $('#bios').empty();
    bios.forEach(function(person){
      $('#bios').append('<li>'+'<img src="'+person.image+'"/><br>'+'Name: '+person.firstName+''+person.lastName
      +'<br>Bio: '+person.bio+'<br><button id="'+person.firstName+'"class="like">Like</button></li>');
    });
}

  function likeMe(){
    console.log('hit likeMe ', likeWho);
    $.ajax({
      url: likeWho,
      type: 'POST',
      success: updateLikes
    })
  }
  function updateLikes(){
    console.log('success');
  }
