
## Build Setup

### Tools that we will used for our installation
> Before you begin make sure you install nodejs :  
> Guide on how to install yarn globally for different OS :  

for Windows:
```bash
$ yarn global install
```
for Linux(debian / ubuntu):
```bash
$ sudo apt update && sudo apt install yarn
```
for Macos
```bash
$ brew install yarn
```
## Vue Project

> Guide on how to install Vue cli 

install vue cli
```bash
$ yarn global add @vue/cli

```

## Project packages Setup

> This are the packages that are going to be used on the application

``` bash

# install dependencies
$ yarn 

# Run your tests
$ yarn run test

# Compiles and hot-reloads for development
$ yarn run serve

# Compile for production with minification
$ yarn run build

```
## Docker Setup

> This are the commands to run docker on your local enviroment

Build your docker image (windows)
```bash
$ docker build . -t armu

```
Build your docker image (linux)
```bash
$ sudo docker build . -t armu

```
Run your docker image (windows)

```bash
$ docker run -d -p 8080:80 armu

```
Run your docker image (Linux)

```bash
$ sudo docker run -d -p 8080:80 armu

```
