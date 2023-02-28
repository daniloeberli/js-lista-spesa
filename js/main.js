"use strict"

const list = ['latte','uova','birra','carne','pomodori'];
const ul = document.getElementById('list');
let i = 0;

while(i < list.length){
    const listItem = document.createElement('li'); 
    listItem.append(list[i]);
    ul.append(listItem);
    i++;
} 