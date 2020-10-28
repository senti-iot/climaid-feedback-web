#!/bin/bash

if [[ "$1" == "master" ]]; then 
	echo
	echo Deploying climaid-feedback-web $1 ... 
	rsync -r --quiet $2/build/ deploy@rey.webhouse.net:/srv/www/climaid-feedback-web/production
	echo
	curl -X POST -H 'Content-type: application/json' --data '{"text":"climaid-feedback-web MASTER updated!"}' https://hooks.slack.com/services/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
	echo Deployment to production done!
	exit 0
fi 

if [[ "$1" == "dev" ]]; then 
	echo
	echo Deploying climaid-feedback-web $1 ... 
	rsync -r --quiet $2/build/ deploy@rey.webhouse.net:/srv/www/climaid-feedback-web/development
	echo
	curl -X POST -H 'Content-type: application/json' --data '{"text":"climaid-feedback-web DEV updated!"}' https://hooks.slack.com/services/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
	echo Deployment to dev done!
	exit 0
fi