document.querySelector("#floating-btn").addEventListener("click", ()=>{

  if (document.querySelector("#floating-btn").innerHTML == "Show More"){

        document.querySelector("#floating-btn").innerHTML = "Show Less"

  } else if (document.querySelector("#floating-btn").innerHTML == "Show Less"){

        document.querySelector("#floating-btn").innerHTML = "Show More"

  }

});

