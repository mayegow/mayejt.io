const contentPosts = document.getElementById('contentBx')
const loadData = async () => {
    const url = 'https://api.github.com/users/mayegow/repos'
    await axios.get(url)
    .then( res => {
        loadRepo(res.data)
    })
    .catch(e => {
        console.log(`Error: ${e}`)
    })
}

const loadRepo = (data) => {
    const urlGithub = 'https://api.github.com/repos'
    data.forEach(async project => {
        const postColumn = document.createElement('div')
        const postBox    = document.createElement('div')
        const textBx     = document.createElement('div')
        const imgBx      = document.createElement('img')
        const h3         = document.createElement('h3')
        const a          = document.createElement('a')
        postColumn.setAttribute('class', 'postColumn')
        postBox.setAttribute('class', 'postBox')
        imgBx.setAttribute('class', 'imgAbout')
        textBx.setAttribute('class', 'textBx')
        h3.textContent = project.description
        a.setAttribute('href', project.clone_url)
        a.setAttribute('class', 'btn')
        a.setAttribute('target', '_blank')
        a.textContent = 'ver más'


        const fullUrl  = `${urlGithub}/${project.full_name}/contents/README.md`
        const repo     = await axios.get(fullUrl)
        const response = await repo.data
        const decodeFile = atob(response.content)
        const imageRegex = /!\[.*?\]\((.*?\.(png|jpg|jpeg|gif|svg))\)/g;
        const imageUrls = [...decodeFile.matchAll(imageRegex)];
        if (imageUrls.length > 0) {
            const convertedUrl = convertGitHubUrl(imageUrls[0][1]);
            imgBx.setAttribute('src', convertedUrl)
            textBx.appendChild(h3)
            textBx.appendChild(a)
            postBox.appendChild(imgBx)
            postBox.appendChild(textBx)
            postColumn.appendChild(postBox)
            contentPosts.appendChild(postColumn)

        } else {
            console.log("No se encontraron imágenes.");
        }
        
    })
}

const convertGitHubUrl = (url) => {
    // Reemplaza "https://github.com" con "https://raw.githubusercontent.com"
    let rawUrl = url.replace('https://github.com', 'https://raw.githubusercontent.com');
    
    // Elimina "/blob/" de la URL
    rawUrl = rawUrl.replace('/blob/', '/');
    
    return rawUrl;
  }