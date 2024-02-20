// gsap.to(".box", {
//   duration: 1,
//   repeat: 0,
//   delay: 1.5,
//   backgroundColor: "white",
//   scale: 0.1,
//   y: -1000,
//   opacity: 0,
//   ease: "power1.inOut",
//   stagger: {
//     grid: [10, 20],
//     from: "random",
//     amount: 2,
//   },
//   display: "hide",
// });

// effect between pages



let alp = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let alp1 = ['私', 'は', '癌', 'を', '患', 'っ', 'て', 'い', 'ま', 'す', 'モ', 'ネ', 'シ', 'ュ', 'ベ', 'ル', '公', '式', 'コ', 'リ', 'ン', 'ズ', '英', '和', '辞', '典', 'オ', 'ン', 'ラ', 'イ', 'ン', '。', '英', '語', 'の', '単', '語', 'や', 'フ', 'レ', 'ー', 'ズ', 'の', '日', '本', '語', '訳', 'に', 'つ', 'い', 'て'];
//alp1 = ['ᔑ', 'ʖ', 'ᓵ', '↸', 'ᒷ', '⎓', '⊣', '⍑', '╎', '⋮', 'ꖌ', 'ꖎ', 'ᒲ', 'リ', '?', '^', '!', '¡', 'ᑑ', '∷', 'ᓭ', 'ℸ', ' ', '̣', '⚍', '⍊', '∴', ' ', '̇', '/', '|', '|', '⨅'];



setTimeout(() => {
  function effect_between_pages(url) {
    console.log("hi")
    
    
    // console.log(window.url)
  
  
  }

  {
    // -------HOME------
    let element = document.getElementById("homeg");
    let duration = 0;
    let actual_len = 4;
    let len = 0;
    let actual_word = "Home";
    var count = 0;
  
    let glich_effect_home = setInterval(() => {
      var inner_count = 0;
  
      count++
      if (count > 10){
        len++;
        count = 0;
      }
      if (len > actual_len) {
        clearInterval(glich_effect_home);
      }
      let a = actual_word
        .toString()
        .split("")
        .map((ele) => {
          inner_count++;
          if (len >= inner_count) {
            return actual_word[inner_count-1]
          }
          let temp = alp1[Math.floor(Math.random() * alp1.length)];
          return temp;
        });
  
      element.innerHTML = a.join('');
    }, 40);
  
  }

  {
    // -------PROJECT------
    let element = document.getElementById("projectg");
    let actual_word = "Projects";
    let actual_len = actual_word.length;
    let len = 0;
    var count = 0;
  
    let glich_effect_project = setInterval(() => {
      var inner_count = 0;
  
      count++
      if (count > 10){
        len++;
        count = 0;
      }
      if (len > actual_len) {
        clearInterval(glich_effect_project);
      }
      let a = actual_word
        .toString()
        .split("")
        .map((ele) => {
          inner_count++;
          if (len >= inner_count) {
            return actual_word[inner_count-1]
          }
          let temp = alp1[Math.floor(Math.random() * alp1.length)];
          return temp;
        });
  
      element.innerHTML = a.join('');
    }, 30);
  
  }


  {
    // -------CONTACT------
    let element = document.getElementById("contactg");
    let actual_word = "Contact";
    let actual_len = actual_word.length;
    let len = 0;
    var count = 0;
  
    let glich_effect_contact = setInterval(() => {
      var inner_count = 0;
  
      count++
      if (count > 10){
        len++;
        count = 0;
      }
      if (len > actual_len) {
        clearInterval(glich_effect_contact);
      }
      let a = actual_word
        .toString()
        .split("")
        .map((ele) => {
          inner_count++;
          if (len >= inner_count) {
            return actual_word[inner_count-1]
          }
          let temp = alp1[Math.floor(Math.random() * alp1.length)];
          return temp;
        });
  
      element.innerHTML = a.join('');
    }, 40);
  
  }


  {
    // -------g1------
    let element = document.getElementById("g1");
    let actual_word = "Hey There!!";
    let actual_len = actual_word.length;
    let len = 0;
    var count = 0;
  
    let glich_effect_contact = setInterval(() => {
      var inner_count = 0;
  
      count++
      if (count > 10){
        len++;
        count = 0;
      }
      if (len > actual_len) {
        clearInterval(glich_effect_contact);
      }
      let a = actual_word
        .toString()
        .split("")
        .map((ele) => {
          inner_count++;
          if (len >= inner_count) {
            return actual_word[inner_count-1]
          }
          let temp = alp1[Math.floor(Math.random() * alp1.length)];
          return temp;
        });
  
      element.innerHTML = a.join('');
    }, 20);
  
  }


  {
    // -------g2------
    let element = document.getElementById("g2");
    let actual_word = "I Am MONESHVEL S T";
    let actual_len = actual_word.length;
    let len = 0;
    var count = 0;
  
    let glich_effect_contact = setInterval(() => {
      var inner_count = 0;
  
      count++
      if (count > 10){
        len++;
        count = 0;
      }
      if (len > actual_len) {
        clearInterval(glich_effect_contact);
      }
      let a = actual_word
        .toString()
        .split("")
        .map((ele) => {
          inner_count++;
          if (len >= inner_count) {
            return actual_word[inner_count-1]
          }
          let temp = alp1[Math.floor(Math.random() * alp1.length)];
          return temp;
        });
  
      element.innerHTML = a.join('');
    }, 10);
  
  }


},3000);

