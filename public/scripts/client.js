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
      $('#bios').append('<li>'+'<img src="'+person.image+'"/><br>'+'Name: '+person.firstName+' '+person.lastName
      +'<br>Bio: '+person.bio+'<br><button id="'+person.firstName+'"class="like">Like</button>&nbsp;&nbsp;<span id="'+person.lastName+'">0</span></li>');
    });
}

  function likeMe(){
    //console.log('hit likeMe ', likeWho);
    $.ajax({
      url: likeWho,
      type: 'POST',
<<<<<<< HEAD:public/client.js
      // success: updateLikes
      success:displayLikes
=======
      //success: updateLikes
      success: displayLikes
>>>>>>> 4d4d1deb365dd035a45cd12b76d463596c7e97d7:public/scripts/client.js
    })
  }
  // function updateLikes(){
  //   console.log('updateLikes function success');
  //   $.ajax({
  //     url:'/likes',
  //     type: 'GET',
  //     success: displayLikes
  //   });
  // }

  function displayLikes(bios){
    bios.forEach(function(person){
      $('#bios').find("#"+ person.lastName).text(person.likes);

    });
  }