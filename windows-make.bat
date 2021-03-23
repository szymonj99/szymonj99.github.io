@echo off
cd mywebsite
flutter build web
robocopy .\build\web\ .. /mt:4 /z /e /im
cd ..