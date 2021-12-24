<h1 align="center">homeoverview</h1>

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/zgast/homeoverview)
![GitHub all releases](https://img.shields.io/github/downloads/zgast/homeoverview/total)
![GitHub contributors](https://img.shields.io/github/contributors/zgast/homeoverview)
![GitHub last commit](https://img.shields.io/github/last-commit/zgast/homeoverview)
![GitHub issues](https://img.shields.io/github/issues-raw/zgast/homeoverview)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/zgast/homeoverview)
![GitHub language count](https://img.shields.io/github/languages/count/zgast/homeoverview)
![views](https://visitor-badge.glitch.me/badge?page_id=zgast.homeoverview)

homeoverview is a Website, that displays all of your locally host websites, to have an nice overview on them,
it is easily configurable and it is build for using it with docker.

## Install with Docker
```bash
# create volume and config
mkdir /docker/homeoverview/
cd /docker/homeoverview/
touch config.json

# edit the config
vim config.json # use the example config from below and edit it to your wishes

# start container
sudo docker run -d --name homeoverview -p 80:3000 -v /docker/homeoverview:/homeoverview/volume/ zgast/homeoverview:latest
```

### example config
```json
{
  
  "logo":{
     "customLogo":false,
     "logoURL":"https://www.crn.ru/upload/iblock/0ce/Synology_logo_Standard.png"
  },
  "sites":[
     {
        "name":"example",
        "url":"http://example.local/",
        "description":"",
        "logo":"https://www.crn.ru/upload/iblock/0ce/Synology_logo_Standard.png"
     }
  ]
}
```
**logo**:   you can enable customLogo with an true and the logo gets replaced with the URL from logoURL

**sites**:  those are the cards and the websites, you can enter as much as you want, if you leave the description empty, it will 
            be replaced with an example
            



## Install without Docker
### yarn
```bash
# clone repo
git clone https://github.com/zgast/homeoverview/
cd homeoverview
# edit the config
vim ./volume/config.json
# build and start it
yarn build
yarn start
```
### npm
```bash
# clone repo
git clone https://github.com/zgast/homeoverview/
cd homeoverview
# edit the config
vim ./volume/config.json
# build and start it
npm run build
npm run start
```

## Look

![](https://github.com/zgast/homeoverview/blob/main/.screens/Screenshot-20211224124046-2560x1365.png?raw=true)
