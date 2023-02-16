# All APODs
This is a set of scripts for creating & maintaining all NASA APODs as JSON.

APODs (astronomy picture of the day) are pictures of the cosmos accompanied by an explanation. NASA has been publishing them since July 16, 1995.


## Installation
- Go to [nasa/apod-api](https://github.com/nasa/apod-api)
	- Follow instructions on how to install & run the API
	- Run the API
	- WARNING! ⚠️ : if you are using a recent version of Python you might get an error regarding the Collections module. To fix this go to `apod-api/apod/utility.py` and add the following before all the imports:
	```python
	import collections
	collections.Callable = collections.abc.Callable
	```
		- The `apod-api` repo looks unmaintained, it is likely that more and more quick fixes like the one above will be needed as time passes

- Installing this repo:
	- Clone this repo:
	```console
	git clone https://github.com/pedro-valdez/all-apods
	```
	- Install dependencies:
	```console
	npm i
	```


## How to use
- `apods.json` is the file containing all APODs
	- As of now the only way to update is by regenerating it with with:
	```console
	node main
	```


## Motivation
I'm creating a website using [NASA OPEN APIs](https://api.nasa.gov/), which is slow and unreliable at times and the allowed requests per day is low.
Since the data is static and homogenous, I decided to create a JSON file containing all APODs, that way I will only need to make API calls on APODs
that aren't in the JSON.
