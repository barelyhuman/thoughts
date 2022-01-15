#!/bin/bash 
file="$(date +'%Y%m%d-%H%M%S')-note"
touch notes/${file}.md
vim notes/${file}.md
