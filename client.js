$(function() {
  
  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  
})

  // Add a variable "pet_info" equal to a dictionary with the name (string), weight (number), and happiness (number) of your pet

var pet_info = {
  name: "snoopy",
  weight: 9,
  happiness: 0
}

  function clickedTreatButton() {
    // Increase pet happiness
    pet_info.happiness = pet_info.happiness + 1;
    // Increase pet weight
    pet_info.weight = pet_info.weight + 1;
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
    // Increase pet happiness
    pet_info.happiness = pet_info.happiness + 1;
    // Decrease pet weight
    pet_info.weight = pet_info.weight - 1;
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {
    // Decrease pet happiness
    pet_info.happiness = pet_info.happiness - 1;
    // Decrease pet weight
    pet_info.weight = pet_info.weight - 1;
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    // Add conditional so if weight is lower than zero, set it back to zero
    if(pet_info.weight < 0){
       pet_info.name = "Dead Snoopy";
       alert('for god sakes, feed your pet!');
       pet_info.weight = 0;
       pet_info.happiness = -3;
      //.pet-image
       $(".pet-image").attr("src","http://3.bp.blogspot.com/-Qyjh3hJoE7s/Vj_-eD2yciI/AAAAAAAAENk/YWPxyC_rZFY/s1600/uSdIn8D.gif");
    }
    else if(pet_info.weight > 15) {
     //https://i.imgur.com/verwBF0.gif
      pet_info.name = "Fat Snoopy";
      $(".pet-image").attr("src","https://i.imgur.com/verwBF0.gif");
    }
    else if(pet_info.happiness < 0) {
      pet_info.name = "Sad Snoopy";
      $(".pet-image").attr("src","http://66.media.tumblr.com/1c5eb50cf70a26f82976de1e439a2820/tumblr_o9p9rnabJm1s2wio8o1_500.gif");
    }
    else if (pet_info.happiness > 5) {
      pet_info.name = "Happy Snoopy";
      $(".pet-image").attr("src","https://media1.tenor.com/images/84a4ba2ce0a2f09248396c899f2102e3/tenor.gif");
      if (pet_info.happiness > 10) {
      $(".pet-image").attr("src","https://media1.tenor.com/images/b2c85bda67c05e092c5c0d53aeda26f7/tenor.gif?itemid=9668712");
    }
    }
  }
  
  // Updates your HTML with the current values in your pet_info dictionary
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
  }
