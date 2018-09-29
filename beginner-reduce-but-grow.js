function grow(x){
    var result = x.reduce(function (accumulator,current) {
      return accumulator * current;
    },1);
  return result;
  }