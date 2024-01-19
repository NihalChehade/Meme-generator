
const form=document.querySelector("form");
const memesDiv=document.querySelector(".memes");
const submit=document.querySelector("input[type='submit']");
const inptUrl=document.querySelector("input[type='url']");
const inptOnTop=document.querySelector("#topTxt");
const inptOnBtm=document.querySelector("#btmTxt");

//
form.addEventListener("submit", function(e){
    e.preventDefault();
    //if true, create the newMeme and then empty the form
    formValidation()? addMemes():"";
    form.reset();
});

function addMemes(){
    //creating elements : new meme div. text,image and deletebtn child nodes .
const newMeme=document.createElement("div");
newMeme.classList.add("imageDiv");
const toptxtDiv=document.createElement('div');
toptxtDiv.id="toptxtDiv";
toptxtDiv.innerHTML=inptOnTop.value;
const btmTxtDiv=document.createElement('div');
btmTxtDiv.id="btmTxtDiv";
btmTxtDiv.innerHTML=inptOnBtm.value;
const img=document.createElement("img");
img.src=inptUrl.value;
const deleteBtn=document.createElement("button");
deleteBtn.classList.add("delete");

//when click deletebtn remove parent element
deleteBtn.addEventListener("click",function(e){
    e.target.parentElement.remove();
});
deleteBtn.innerHTML="X";

//appending newmeme children
newMeme.append(toptxtDiv);
newMeme.append(img);
newMeme.append(btmTxtDiv);
newMeme.append(deleteBtn);

//append new meme to parent div( memesDiv)
memesDiv.append(newMeme);

}


function formValidation() {
   
    const a = inptUrl.value;
    const b = inptOnTop.value;
    const c = inptOnBtm.value;

   //if all fields are empty or any field is empty return false
    if ((a == "" && b == "" && c == "")|| a =="" || b =="" || c =="") {
      alert("Please Fill In All Required Fields");
      return false;
    }else {
        return true;
    }
  }