// Accessing single DOM element => forEach


const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

const handleAction=(action)=>{
  let output = parseInt(value.textContent, 10);

  if(action==='increase'){
    output++;
  }
  else if(action==='decrease' && output>0){
    output--;
  }
  else if(action==='reset'){
    output=0;
  } 
  return output
      
}


btns.forEach(btn => {
  btn.addEventListener('click', function(e){
    const action =e.currentTarget.classList[1]
    // console.log(action)
    // console.log (value.textContent)
    value.textContent=handleAction(action)
  })
})
