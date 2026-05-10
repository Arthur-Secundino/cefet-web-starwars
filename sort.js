export function comparaFilmes(filmeA, filmeB){
    if(filmeA.episode_id < filmeB.episode_id){
        return -1;
    }
    else{
        return 1;
    }
}