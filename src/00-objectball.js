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
    gameObj.away=teamObject("Charlotte Hornets",colors,playersObject(players,stats));
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

function numPointsScored(playerName){
    const gameObj=gameObject();
    const teams=Object.values(gameObj);
    for(let i=0; i<teams.length; i++){
        const team=teams[i];
        const players=team.players;
        if(players[playerName]!=undefined){
            return players[playerName].points;
        }
    }
    return -1;
}

function shoeSize(playerName){
    const gameObj=gameObject();
    const teams=Object.values(gameObj);
    for(let i=0; i<teams.length; i++){
        const players=teams[i].players;
        if(players[playerName]!=undefined){
            return players[playerName].shoe;
        }
    }
    return -1;
}

function teamColors(teamName){
    const gameObj=gameObject();
    const teams=Object.values(gameObj);
    for(let i=0;i<teams.length; i++){
        const team=teams[i];
        if(team.name==teamName){
            return team.colors;
        }
    }
    return [];
}

function playerNumbers(teamName){
    const gameObj=gameObject();
    const teams=Object.values(gameObj);
    let team;
    for(let i=0; i<teams.length; i++){
       team=teams[i];
       if(team.name==teamName){
        const players=team.players;
        const playerNames=Object.keys(players);
        const teamNumbers=[];
        playerNames.forEach(playerName=>{
            teamNumbers.push(players[playerName].number);
        });
        return teamNumbers;
       }
    }
    return [];
}

function playerStats(playerName){
    const gameObj=gameObject();
    const teams=Object.values(gameObj);
    for(let i=0; i<teams.length; i++){
        const team=teams[i];
        const players=team.players;
        if(players[playerName]!=undefined){
            return players[playerName];
        }
    }
    return {};
}

function bigShoeRebounds(){
    const largestShoeSizePlayerStats=getLargestShoeSizePlayerStats();
    return largestShoeSizePlayerStats.rebounds;
}

function getLargestShoeSizePlayerStats(){
    const gameObj=gameObject();
    const teams=Object.values(gameObj);
    let playerStats=[];
    teams.forEach(team=>{
        const players=team.players;
        const teamPlayerStats=Object.values(players);
        playerStats=playerStats.concat(teamPlayerStats);
    });
    let largestReboundsStats=playerStats[0];
    for(let i=1; i<playerStats.length; i++){
        if(playerStats[i].rebounds>largestReboundsStats.rebounds){
            largestReboundsStats=playerStats[i];
        }
    }
    return largestReboundsStats;
}

function teamNames(){
    const gameObj=gameObject();
    const teams=Object.values(gameObj);
    const teamNames=[];
    teams.forEach(team=>{
        teamNames.push(team.name);
    });
    return teamNames;
}

function mostPointsScored(){
    const gameObj=gameObject();
    const teams=Object.values(gameObj);
    let players=[];
    teams.forEach(team=>{
        let curPlayers=Object.entries(team.players);
        players=players.concat(curPlayers);
    });
    let highestScore=players[0][1].points;
    let highestScorePlayer=players[0][0];
    for(let i=1; i<players.length; i++){
        const curScore=players[i][1].points;
        const curPlayer=players[i][0];
        if(curScore>highestScore){
            highestScore=curScore;
            highestScorePlayer=curPlayer;
        }
    }
    return highestScorePlayer;
}

function gameObject2(){
    return {
        "home":{
            "name":"Brooklyn Nets",
            "colors":["black","white"],
            "players":{
                "Alan Anderson":{
                    "number":0,
                    "shoe":16,
                    "points":22,
                    "rebounds":12,
                    "assists":12,
                    "steals":3,
                    "blocks":1,
                    "slam dunks":1
                },
                "Reggie Evans":{
                    "number":30,
                    "shoe":14,
                    "points":12,
                    "rebounds":12,
                    "assists":12,
                    "steals":12,
                    "blocks":12,
                    "slam dunks":7
                },
                "Brook Lopez":{
                    "number":11,
                    "shoe":17,
                    "points":17,
                    "rebounds":19,
                    "assists":10,
                    "steals":3,
                    "blocks":1,
                    "slam dunks":15
                },
                "Mason Plumlee":{
                    "number":1,
                    "shoe":19,
                    "points":26,
                    "rebounds":12,
                    "assists":6,
                    "steals":3,
                    "blocks":8,
                    "slam dunks":5
                },
                "Jason Terry":{
                    "number":31,
                    "shoe":15,
                    "points":19,
                    "rebounds":2,
                    "assists":2,
                    "steals":4,
                    "blocks":11,
                    "slam dunks":1
                }
            }
        },
        "away":{
            "name": "Charlotte Hornets",
            "colors":["turquoise","purple"],
            "players":{
                "Jeff Adrien":{
                    "number":4,
                    "shoe":18,
                    "points":10,
                    "rebounds":1,
                    "assists":1,
                    "steals":2,
                    "blocks":7,
                    "slam dunk":2
                },
                "Bismak Biyombo":{
                    "number":0,
                    "shoe":16,
                    "points":12,
                    "rebounds":4,
                    "assists":7,
                    "steals":7,
                    "blocks":15,
                    "slam dunks":10
                },
                "DeSagna Diop":{
                    "number":2,
                    "shoe":14,
                    "points":24,
                    "rebounds":12,
                    "assists":12,
                    "steals":4,
                    "blocks":5,
                    "slam dunks":15
                },
                "Ben Gordon":{
                    "number":8,
                    "shoe":15,
                    "points":33,
                    "rebounds":3,
                    "assists":2,
                    "steals":1,
                    "blocks":1,
                    "slam dunks":0
                },
                "Brendan Haywood":{
                    "number":33,
                    "shoe":15,
                    "points":6,
                    "rebounds":12,
                    "assists":12,
                    "steals":22,
                    "blocks":5,
                    "slam dunks":12
                }
            }
        }
    }
}
