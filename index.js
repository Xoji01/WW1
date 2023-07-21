function dlName (a,b,c){
    let imya = [a,b,c]
    let dlImya =  imya.reduce((a, b) => (b.length > a.length) ? b : a) 
    return dlImya
  };
  let maxIm = dlName('Alex', 'George', 'Michael') 
  console.log(maxIm);
