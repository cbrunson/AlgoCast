const getData = () => {
    sendHttpRequest('GET','https://jsonmock.hackerrank.com/api/football_matches?year=2011')
        .then(reponseData => {
        console.log(reponseData);
    });
};

getData();