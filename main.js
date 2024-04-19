function page2(){
document.getElementById('content').style.display = "none";
document.getElementById('content3').style.display = "none";
document.getElementById('content2').style.display = "block";
}
function page3(){
    document.getElementById('content').style.display = "none";
    document.getElementById('content2').style.display = "none";
    document.getElementById('content3').style.display = "block";
}
function page1(){
    document.getElementById('content').style.display = "block";
    document.getElementById('content3').style.display = "none";
    document.getElementById('content2').style.display = "none";
}

const optionMenu = document.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".sBtn-text");

      selectBtn.addEventListener("click",() => optionMenu.classList.toggle("active"));

      options.forEach(option =>{
        option.addEventListener("click",() =>{
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active")
        })
      })

      const optionMenu1 = document.querySelector(".select-menu1"),
      selectBtn1 = optionMenu1.querySelector(".select-btn1"),
      options1 = optionMenu1.querySelectorAll(".option1"),
      sBtn_text1 = optionMenu1.querySelector(".sBtn-text1");

      selectBtn1.addEventListener("click",() => optionMenu1.classList.toggle("active"));

      options1.forEach(option1 =>{
        option1.addEventListener("click",() =>{
            let selectedOption1 = option1.querySelector(".option-text1").innerText;
            sBtn_text1.innerText = selectedOption1;
            optionMenu1.classList.remove("active")
        })
      })

      
      function checkreq() {
        var returnValue;
        var category = document.getElementById("sBtn-text").innerHTML;
        var event = document.getElementById("event");
        var eventdate = document.getElementById("eventdate");
        var eventtime = document.getElementById("eventtime");
        var eventlocation = document.getElementById("eventlocation");
        var city = document.getElementById("city")/*.value*/;
        var eventorganizer = document.getElementById("eventorganizer");
        var mobilenumber = document.getElementById("mobilenumber");
        var organizeraddress = document.getElementById("organizeraddress");
        var pricingcategory = document.getElementById("pricingcategory");
        var platinum = document.getElementById("platinum");
        var gold = document.getElementById("gold");
        var silver = document.getElementById("silver");
        var bronze = document.getElementById("bronze");
        var freeticket = document.getElementById("sBtn-text1").innerHTML;
        var upload = document.getElementById("fileToUpload");
        var tnc = document.getElementById("termsandcondition");
    
        if (category== ""){
            document.getElementById("category").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (freeticket==""){
            document.getElementById("freeticket").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (event.value== ""){
            document.getElementById("events").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (eventdate.value== ""){
            document.getElementById("eventdates").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (eventtime.value== ""){
            document.getElementById("eventtimes").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (eventlocation.value== ""){
            document.getElementById("eventlocations").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (city.value== ""){
            document.getElementById("citys").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (eventorganizer.value== ""){
            document.getElementById("eventorganizers").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (mobilenumber.value== ""){
            document.getElementById("mobilenumbers").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (organizeraddress.value== ""){
            document.getElementById("organizeraddresss").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (pricingcategory.value== ""){
            document.getElementById("pricingcategorys").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (platinum.value== ""){
            document.getElementById("platinums").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if ( gold.value== ""){
            document.getElementById("golds").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (silver.value== ""){
            document.getElementById("silvers").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if ( bronze.value== ""){
            document.getElementById("bronzes").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (upload.value== ""){
            document.getElementById("error").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            returnValue = false;
        }
        if (upload.value== ""){
            document.getElementById("error").innerHTML="*Required";
            document.getElementById("errmsg").style.display="block";
            var x = window.matchMedia('(max-width:450px)')
            if(x.matches){
                document.getElementById("bannertext").style.marginLeft="25px";
                document.getElementById("bannertext").style.width="310px";
                document.getElementById("bannertext").style.fontSize="20px";
            }
            returnValue = false;
        }
        if (tnc.checked==false){
            document.getElementById("tnc").innerHTML="agree*";
            document.getElementById("errmsg").style.display="block";
            var x = window.matchMedia('(max-width:450px)')
            if(x.matches){
                document.getElementById("termsandcondition-div").style.marginLeft="15px";
                document.getElementById("termsandcondition-div").style.width="330px";
            }
            returnValue = false;
        }

        return returnValue;
    }
