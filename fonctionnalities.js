// Le Fieldset
$('#leLabel').click(function(){
  $('hr').after('<div id="container">Choisissez un Label <input type="text" id="idinput"><br/><br/>Choisissez le type du champ <br/><input type="radio" id="typeField_txt" name="chooseType" checked /><label for="text">Text</label><br/><input type="radio" id="typeField_pswd" name="chooseType" /><label for="password">Password</label><br/><input type="radio" id="typeField_date" name="chooseType" /><label for="date">Date</label><br/><input type="radio" id="typeField_mail" name="chooseType" /><label for="email">Email</label><br/><input type="radio" id="typeField_nb" name="chooseType" value="number" /><label for="typeField_nb">Number</label><br/><br/><button type="button" class="btn" id="btnok">Valider</button><button type="button" class="btn" id="btnannuler">Annuler</button></div><div id="container2"></div>');


  // Ajax
  $('#container2').load('initialize.html .zlabel');

  // Un clic puis on descative les btn principal jusqu'à ce qu'on remplisse le formulaire
  $('.btnprincipal').attr('disabled','disabled');
  $('#container').hide().fadeIn(0.9);
  $('#container2').hide().fadeIn(0.9);

  // Input
  $("#idinput").focus();

  // Button Valider
  $("#btnok").click(function(){
    // La var est dans un span et on récupère la valeur de l'input
    var selectedProduct =$(  $(":radio[name=chooseType]:checked").prop("labels") ).text();
    console.log(selectedProduct);
    var validation = '<label>'+ $('#idinput').val() + '</label><input class="form-control" type="' + selectedProduct + '" id="' + $('#idinput').val() +'"><br>';

    // On insère la valeur de validation dans la div #gauche
    $('#gauche').append(validation);
    // Si on click sur le bouton valider l'info est envoyé dans la div #gauche et le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      // On supprime l'attibut 'disabled' inserer plus haut
      // Si jamais on veut recréer un champs avec un Label
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);
  });

  // Button Annuler
  $("#btnannuler").click(function(){
    //Si on click sur le bouton annuler le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);
  });
}); // Fin Label



// Bouton
$('#leBouton').click(function(){
  $('hr').after('<div id="container">Texte du bouton<br/><input type="text" id="idinput"><br/><br/><button type="button" class="btn" id="btnok">Valider</button><button type="button" class="btn" id="btnannuler">Annuler</button></div><div id="container2"></div>');

  // Ajax
  $('#container2').load('initialize.html .zbouton');

  // Un clic puis on descative les btn principal jusqu'à ce qu'on remplisse le formulaire
  $('.btnprincipal').attr('disabled','disabled');
  $('#container').hide().fadeIn(0.9);
  $('#container2').hide().fadeIn(0.9);

  // Input
  $("#idinput").focus();

  // Button Valider
  $("#btnok").click(function(){
    // La var est dans un span et on récupère la valeur de l'input
    var validation = '<button type="submit" class="btn btn-outline-secondary">' + $('#idinput').val() + '</button><br/>';
    // On insère la valeur de validation dans la div #gauche
    $('#gauche').append(validation);
    // Si on click sur le bouton valider l'info est envoyé dans la div #gauche et le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      // On supprime l'attibut 'disabled' inserer plus haut
      // Si jamais on veut recréer un champs avec un Label
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);
  });

  // Button Annuler
  $("#btnannuler").click(function(){
    //Si on click sur le bouton annuler le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);
  });
}); // Fin bouton



// Code Formulaire
$('#cForm').click(function(){

  // Input
  $("#idinput").focus();

  var htmlString = $('#gauche').html();
  $('#code-form').text('<form>' +htmlString+ '</form>');
});
 // Fin code formulaire


// Effacer le code
$('#supprimer').click(function(){
  $('hr').after('<div id="container">Supprimer le contenu<br/><br/><button type="button" class="btn" id="btnok">Valider</button><button type="button" class="btn" id="btnannuler">Annuler</button></div><div id="container2"></div>');

  // Ajax
  $('#container2').load('initialize.html .zefface');

  // Un clic puis on descative les btn principal jusqu'à ce qu'on remplisse le formulaire
  $('.btnprincipal').attr('disabled','disabled');
  $('#container').hide().fadeIn(0.9);
  $('#container2').hide().fadeIn(0.9);

  // Input
  $("#idinput").focus();

  // Button Valider
  $("#btnok").click(function(){
    // La var est dans un span et on récupère la valeur de l'input
    $("#gauche, #code-form").empty();

    // Si on click sur le bouton valider l'info est envoyé dans la div #gauche et le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      // On supprime l'attibut 'disabled' inserer plus haut
      // Si jamais on veut recréer un champs avec un Label
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);

  });

  // Button Annuler
  $("#btnannuler").click(function(){
    //Si on click sur le bouton annuler le champs label s'en va
    $('#container').fadeOut(0.9, function(){
      $('#container').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $('#container2').fadeOut(0.9);
  });
}); // Fin code formulaire
