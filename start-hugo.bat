@echo off
title Driven By Light - Hugo Server

cd /d C:\Siti\drivenbylight

echo Avvio Hugo...
start "" http://localhost:1313

hugo server -D

pause
