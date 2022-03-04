const getCss = document.querySelector("#getCss");
const getJs = document.querySelector("#getJs");
const getHtml = document.querySelector("#getHtml");
const getJson = document.querySelector("#getJson");
const getDate = document.querySelector("#getDate");
getCss.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("get","/style.css")
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 ){
            if (request.status >= 200 && request.status < 300){
                    const style = document.createElement("style");
                    style.innerHTML = request.response;
                    document.head.appendChild(style);
            }else {
                alert("加载CSS失败");
            }
    }
    }

    request.send();
}

getJs.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get","/2.js")
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 ){
            if (request.status >=200 && request.status < 300){
                const script = document.createElement("script");
                script.innerHTML = request.response;
                document.body.appendChild(script);
            }

        }
    }
    request.send();
}

getHtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get","/3.html")
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 ){
            if (request.status >=200 && request.status < 300){
                const template = document.createElement("div");
                template.innerHTML = request.response;
                document.body.appendChild(template);
            }

        }
    }
    request.send();
}
getJson.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("get","/5.json")
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 ){
            if (request.status >=200 && request.status < 300){
                console.log(JSON.parse(request.response));
            }

        }
    }
    request.send();
}

let n = 1;
getDate.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("get",`/page${n+1}`)
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 ){
            if (request.status >=200 && request.status < 300){
                const array = JSON.parse(request.response);
                array.forEach(item =>{
                    const li = document.createElement("li");
                    li.textContent = item.id;
                    xxx.appendChild(li);
                });
                n+=1
            }

        }
    }
    request.send();
}
