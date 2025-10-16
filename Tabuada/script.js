function tabuada(){


    let p = document.getElementsByTagName("p")

    console.log(p.length)

    if(p.length < 5){
        let NumReq = document.getElementsByTagName("input")[0]

        for(let i = 0;i <= 10;i++){

            let result = NumReq.value * i

            const Element = document.createElement("p")
            Element.textContent = NumReq.value+" X "+i+"= "+result
            document.body.appendChild(Element)
    }

    }
    else{

        let NumReq = document.getElementsByTagName("input")[0]

        for(let i = 0;i <= 10;i++){

            let result = NumReq.value * i

            p[i].innerHTML = NumReq.value+" X "+i+"= "+result

        }
    }

}
