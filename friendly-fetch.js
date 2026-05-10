export async function friendlyFetch(url){
    let filmesBuscados = localStorage.getItem("filmes_buscados");

    if(filmesBuscados === null){
        const resposta = await fetch(url);
        filmesBuscados = await resposta.json();

        localStorage.setItem("filmes_buscados", JSON.stringify(filmesBuscados));
        return filmesBuscados;
    }
    else{
        return JSON.parse(filmesBuscados);
    }
}