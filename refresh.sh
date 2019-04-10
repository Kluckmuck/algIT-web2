 #!/bin/bash         
docker build -t algit-web-v2 .
docker stop $(docker ps -a | grep algit-web-v2 | awk '{print $1}')
docker run -d -p 80:80 algit-web-v2
echo COMPLETED
