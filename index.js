function scuberGreetingForFeet(distance){
  // Write your code here!
  let result;
  if (distance <= 400){
    result ="This one is on me!";
  }
  else if (distance > 2500){
    result= 'No can do.';
  }
else {
  result = "I will gladly take your thirty bucks.";

}
return result;
  }


function ternaryCheckCity(City){
  // Write your code here!
  return City ==='NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
  switch (tip){
    case 'generous':
      response= 'Thank you so much.';
      break;
      case 'not as generous':
        response='Thank you.';
        break;
        default:
          response='Bye.';

  }
  return response;
}