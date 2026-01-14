// 请求 Hitokoto API，分为一言内容和一言作者两部分注入html
    fetch('https://v1.hitokoto.cn/')
        .then(response => response.json())
        .then(data => {
            const hitokotoDiv = document.getElementById('hitokoto');
            const hitokotoAuthorDiv = document.getElementById('hitokoto-author');

            // 在页面上展示 API 返回的值
            hitokotoDiv.innerHTML = `『<a href="https://hitokoto.cn/?uuid=${data.uuid}" target="_blank">${data.hitokoto}</a>』`;
            hitokotoAuthorDiv.innerHTML = `——<a href="https://www.baidu.com/s?word=${data.from_who}" target="_blank">${data.from_who}</a>「<a href="https://www.baidu.com/s?word=${data.from}" target="_blank">${data.from}</a>」`;
            if (data.from_who == null){
                hitokotoDiv.innerHTML = `『<a href="https://hitokoto.cn/?uuid=${data.uuid}" target="_blank">${data.hitokoto}</a>』`;
                hitokotoAuthorDiv.innerHTML = `——「<a href="https://www.baidu.com/s?word=${data.from}" target="_blank">${data.from}</a>」`;
            }
            if (data.from == null){
                hitokotoDiv.innerHTML = `『<a href="https://hitokoto.cn/?uuid=${data.uuid}" target="_blank">${data.hitokoto}</a>』`;
                hitokotoAuthorDiv.innerHTML = `——<a href="https://www.baidu.com/s?word=${data.from_who}" target="_blank">${data.from_who}</a>`;
            }
            if (data.from_who == null && data.from == null){
                hitokotoDiv.innerHTML = `『<a href="https://hitokoto.cn/?uuid=${data.uuid}" target="_blank">${data.hitokoto}</a>』`;
                hitokotoAuthorDiv.innerHTML = ``;
            }
        })
        .catch(error => console.error('Error fetching hitokoto:', error));