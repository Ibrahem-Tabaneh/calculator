
var displayy=document.getElementById('displayy');
var inputt=document.querySelectorAll('.inputt');

inputt.forEach(item=>{

    item.addEventListener('click',function(){
       
        if(item.value==inputt[0].value)
        {
            displayy.value='';
        
        }

        else if(item.value==inputt[1].value)
        {
           displayy.value=displayy.value.slice(0,-1);

        }

        else if(item.value=='='){
         

                try{
                    displayy.value=eval(displayy.value);
                }catch(error)
                {
                    displayy.value=error.message;
                }
          

           
          
        }

        else{
            displayy.value+=item.value;
           
        }
    })

    
})

