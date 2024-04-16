// ==UserScript==
// @name         AtCoder-HiderRatingAndPerformance
// @namespace    https://github.com/PenguinCabinet
// @version      v0.0.1
// @description  The tools to hide atcoder rating and performance
// @author       PenguinCabinet
// @license      MIT
// @match        https://atcoder.jp/users/*
// @match        https://atcoder.jp/contests/*
// @grant        none
// ==/UserScript==

//config
const config_hide_ranking=false;
//config

(function() {
    'use strict';

    if(window.location.href.match(/contests/)){
        if(config_hide_ranking){
            let lis=document.querySelectorAll('li');
            lis.forEach(function(elem){         
                console.log(elem.textContent)       
                if(
                    elem.textContent.match(/順位表/)
                ){
                    elem.style.display = 'none';
                }
            });
        }
    }
    else if(window.location.href.match(/history/)){
        let tables=document.querySelectorAll('table');
        tables.forEach(function(elem){
            let len=elem.rows.length;

            for (let i=0;i<len;i++) {
                for(let j=0;j<(config_hide_ranking?5:4);j++){
                    elem.rows[i].deleteCell(-1);
                }
            }
        })
    }else{
        let ths=document.querySelectorAll('th');
        ths.forEach(function(elem){
            if(
                elem.textContent=="Rating"
                ||elem.textContent=="Rating最高値"
            ){
                elem.nextElementSibling.firstElementChild.textContent="XXXX";
            }
        });

        let canvases=document.querySelectorAll('canvas');
        canvases.forEach(function(elem){
            elem.parentNode.style.display = 'none';
        });
    }
    // Your code here...
})();