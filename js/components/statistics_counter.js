const counters = document.querySelectorAll('.count-up');
const speedOfCounting = 1000;

counters.forEach( counting => {
   const animate = () => {
      const value = +counting.getAttribute('targetvalue');
      const data = +counting.innerText;
     
      const time = value / speedOfCounting;
     if(data < value) { //jeigu skaiciuojamas skaicius yra mazesnis negu nurodytas target value, skaiciuoti toliau:
          counting.innerText = Math.ceil(data + time);
          setTimeout(animate);
        }else{
          counting.innerText = value; //jei ne, tai uzrasyti suskaiciuota skaiciu
        }
     
   }
   
   animate();
});
