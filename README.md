# Steakhouse nettside


This is the homepage for Steakhouse. It runs on GCP and is built using Angular.

## Installation & Running locally

```console
$ npm install && npm run dev
```

## Deploy

### Selecting a project

```console
gcloud projects list
```
```console
gcloud config set project `PROJECT ID`
```

```console
$ rm -rf dist && npm run build && npm run deploy:public
```

## Notes

- Remember to delete old appengine instances to save money.
- Always remove dist folder and re-run prod command before deploying.



Built by [Even Stensberg](https://twitter.com/evenstensberg) ♥️


## TODO

- Scroll is janky on iphone