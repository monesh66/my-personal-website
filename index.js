document.addEventListener("DOMContentLoaded",()=>{


    {
        let ele = document.getElementById("e1");
        let actual_content = "Hey There...";
        var count = 0
        var innerCount = 0


        let type_effect = setInterval(()=>{

            count++;
            if (count > actual_content.length) {
                clearInterval(type_effect)
            }
            innerCount = 0;
            let a = actual_content.split("").map((letter)=>{
                innerCount++;
                if (count >= innerCount) {
                    return letter;
                };
                
            });
            ele.innerText = a.join('');
            
        },150)
    }

    setTimeout(()=>
    {
        let ele = document.getElementById("e2");
        let actual_content = 'This previous site looked like <span id="e3" class="funstuff">your mom</span>';
        var count = 0
        var innerCount = 0


        let type_effect = setInterval(()=>{

            count++;
            if (count > actual_content.length) {
                clearInterval(type_effect)
            }
            innerCount = 0;
            let a = actual_content.split("").map((letter)=>{
                innerCount++;
                if (count >= innerCount) {
                    return letter;
                };
                
            });
            ele.innerHTML = a.join('');
            
        },50)
    }   ,3000);

    setTimeout(()=>
    {
        let ele = document.getElementById("e3");
        let actual_content = 'Daily Shit';
        var count = 0
        var innerCount = 0


        let type_effect = setInterval(()=>{

            count++;
            if (count > actual_content.length) {
                clearInterval(type_effect)
            }
            innerCount = 0;
            let a = actual_content.split("").map((letter)=>{
                innerCount++;
                if (count >= innerCount) {
                    return letter;
                };
                
            });
            ele.innerText = a.join('');
            
        },100)
    }   ,7500);

    

     setTimeout(()=>
    {
        let ele = document.getElementById("e4");
        let actual_content = 'i am currently casting a <span id="e5" class="holy">holy magic spell</span> on the new site, so it wont look like <span id="e6" class="funstuff2">your mom</span>';
        var count = 0
        var innerCount = 0


        let type_effect = setInterval(()=>{

            count++;
            if (count > actual_content.length) {
                clearInterval(type_effect)
            }
            innerCount = 0;
            let a = actual_content.split("").map((letter)=>{
                innerCount++;
                if (count >= innerCount) {
                    return letter;
                };
                
            });
            ele.innerHTML = a.join('');
            
        },50)
    }   ,9000);


    setTimeout(()=>
    {
        let ele = document.getElementById("e6");
        let actual_content = 'Ugly Demon Queen';
        var count = 0
        var innerCount = 0


        let type_effect = setInterval(()=>{

            count++;
            if (count > actual_content.length) {
                clearInterval(type_effect)
            }
            innerCount = 0;
            let a = actual_content.split("").map((letter)=>{
                innerCount++;
                if (count >= innerCount) {
                    return letter;
                };
                
            });
            ele.innerText = a.join('');
            
        },100)
    }   ,17700);



    setTimeout(()=>
    {
        let ele = document.getElementById("e7");
        let actual_content = '-Moneshvel S T :)';
        var count = 0
        var innerCount = 0


        let type_effect = setInterval(()=>{

            count++;
            if (count > actual_content.length) {
                clearInterval(type_effect)
            }
            innerCount = 0;
            let a = actual_content.split("").map((letter)=>{
                innerCount++;
                if (count >= innerCount) {
                    return letter;
                };
                
            });
            ele.innerText = a.join('');
            
        },100)
    }   ,19700);
})