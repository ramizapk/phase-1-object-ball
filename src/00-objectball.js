function gameObject(){
    const gameObj={};
    //home team
    let colors=["black","white"];
    let players=["Alan Anderson","Reggie Evans","Brook Lopez","Mason Plumlee","Jason Terry"];
    let stats=[[0,16,22,12,12,3,1,1],[30,14,12,12,12,12,12,7],[11,17,17,19,10,3,1,15],[1,19,26,12,6,3,8,5],[31,15,19,2,2,4,11,1]];
    gameObj.home=teamObject("Brooklyn Nets",colors,playersObject(players,stats));
    //away team
    colors=["Turquoise","Purple"];
    players=["Jeff Adrien","Bismak Biyombo","DeSagna Diop","Ben Gordon","Brendan Haywood"];
    stats=[[4,18,10,1,1,2,7,2],[0,16,12,4,7,7,15,10],[2,14,24,12,12,4,5,5],[8,15,33,3,2,1,1,0],[33,15,6,12,12,22,5,12]];
    gameObj.away=teamObject("Charlotte Gardens",colors,playersObject(players,stats));
    return gameObj;

    function teamObject(name,colors,players){
        const teamObj={};
        teamObj.name=name;
        teamObj.colors=colors;
        teamObj.players=players;
        return teamObj;
    }
    
    function playersObject(players,stats){
        const playersObj={};
        for(let i=0; i<players.length; i++){
            playersObj[`${players[i]}`]=statsObject(stats[i]);
        }
        return playersObj;
    }
    
    function statsObject(stats){
        const statsObj={};
        statsObj.number=stats[0];
        statsObj.shoe=stats[1];
        statsObj.points=stats[2];
        statsObj.rebounds=stats[3];
        statsObj.assists=stats[4];
        statsObj.steals=stats[5];
        statsObj.blocks=stats[6];
        statsObj.slamDunks=stats[7];
        return statsObj;
    }

}

function gameObj2(){
    return {
        "home":{
            "name":"Brooklyn Nets",
            "colors":["black","white"],
            "players":{

            }
        },
        "away":{
            "name": "Charlotte Hornets",
            colors:["turquoise","purple"],
            "players":{

            }
        }
    }
}

function init(){
    const gameObj=gameObject();
    const gameObj2=gameObject2();
    console.log(gameObj);
    console.log.log(gameObj2());
    console.log(gameObj===gameObj2);
}

init();

