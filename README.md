# Docker Swarm Example
> A sample app for docker swarm

## Usage

1. Push to registry or use existing image
    ``` 
    docker build -t sohelamin/docker-swarm-example .
    docker login --username=sohelamin
    docker push sohelamin/docker-swarm-example:latest
    ```

2. Install docker in master & worker nodes
    ``` 
    sudo apt install apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
    sudo apt update
    sudo apt install docker-ce
    sudo usermod -aG docker $USER
    ```

3. Configure docker swarm in master node
    ```
    docker swarm init --advertise-addr <MASTER_NODE_IP>
    ```

4. Join docker swarm from worker node
    ```
    docker swarm join --token docker swarm join --token <TOKEN> <MASTER_NODE_IP>:2377
    ```

5. Check the connected node in master node
    ```
    docker node ls
    ```

6. Git clone the github repo then deploy stack
    ```
    git clone https://github.com/sohelamin/docker-swarm-example.git
    cd docker-swarm-example
    docker stack deploy -c docker-compose.yml docker-swarm-example
    ```
