
fetch('https://interactive-dev-eu-west-1.api-gateway.sit.ls.hereapi.com/interactive/v1' +
    '/catalogs/hrn:here-dev:data::olp-here-ci-mp-p:655f88-f71d9e728' +
    '/layers/b9c943a' +
    '/iterate?apiKey=tRdgyeKm9ciQb6Z4fC-zU0zolHSQ37fAKZ_BMJbOjM0')
    .then(response => response.json())
    .then(data => console.log(data));

console.log("Hello");