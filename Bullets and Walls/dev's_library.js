function bounceOff(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
    }
}

function isTouching(object1,object2){
		
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
    }
    else {     
      return false;
    }  
} 

function hasCollided(obj1, obj2) {
    obj1RightEdge = obj1.x + obj1.width/2;
    obj2LeftEdge = obj2.x - obj2.width / 2;
    if (obj1RightEdge >= obj2LeftEdge) {
        obj1.velocityX = 0;
        return true;
    }
    else{
        return false;
    }
}

function damageCalculator(speed, thickness, weight) {
    return 0.5*speed**2*weight/thickness**3
}