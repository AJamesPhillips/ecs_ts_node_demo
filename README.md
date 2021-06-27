### Node

http://localhost:5005/

HTTP GET modifies data.  Only used for simple demo:
http://localhost:5005/?op=write&file_name=test_data2.txt&data=123
http://localhost:5005/?op=read&file_name=test_data2.txt

### Docker Instructions

Run all commands from the root directory of this repo

**Build the docker image:**

```
docker build -t data-curator:0.1 .
```

**Run docker container:**

```
docker run --entrypoint "/bin/sh" -Pit -v $(pwd)/data:/usr/src/app/data  data-curator:0.1
```