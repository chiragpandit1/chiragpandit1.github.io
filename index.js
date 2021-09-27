// Link to JSFiddle - https://jsfiddle.net/chiragpandit/7cqdjnbf/2/

var myApiKey_nonTrustedDomain_sit = "15Ipv8XF0HaMa-KZXRMo7fycVKviEOuXflhKQACHPnQ"
var myApiKey_trustedDomain_sit = "tRdgyeKm9ciQb6Z4fC-zU0zolHSQ37fAKZ_BMJbOjM0"
var MYTrustedDomain_sit_apiKey2 = "Oz3LzxmAzFQtqn-PdW0PC8z4clblaee86w6mwKvSGy0"
var nonTrustedDomain_prod_apiKey = "nIulFOCL6huCgVTXTz3n-CrKSuuH91FnMGmPvKoNs8U"

/* myApiKey = nonTrustedDomain_prod_apiKey; */
// myApiKey = myApiKey_nonTrustedDomain_sit;
// myApiKey = myApiKey_trustedDomain_sit;
myApiKey = MYTrustedDomain_sit_apiKey2;

//If an API Key is given in URL use that API key to render the HERE map eg. domain.com?apiKey=value, Use that value
const urlParams = new URLSearchParams(window.location.search);
const apiKeyInUrl = urlParams.get('apiKey');

if (apiKeyInUrl != null) {
    myApiKey = apiKeyInUrl;
}

// Custom configuration for MapsJS Vector tiles API
const domainConfig = {};
const getoptions = {
    apikey: myApiKey,
    ts: Date.now()
};

// Vector Tile service
domainConfig[H.service.omv.Service.CONFIG_KEY] = {
    baseUrl: new H.service.Url(
        'https', 'vector.sit.hereapi.com', 'v2/vectortiles/core/mc', getoptions
    ),
    /* subdomain: 'subdomain' // optional, if subdomain is not needed null must be passed */
};

var platform = new H.service.Platform({
    /* apikey: myApiKey_nonTrustedDomain */
    apikey: myApiKey,
    servicesConfig: domainConfig
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
    center: {lat: 40.73861464466027, lng: -73.89351293268845},
    zoom: 11.277659053146774,
    pixelRatio: window.devicePixelRatio || 1
});
window.addEventListener('resize', () => map.getViewPort().resize());
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

window.mapObject = map;




