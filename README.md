github package test

prerequisites:

- docker
- python3.11
- minikube
- kubectl

.dockerconfigjson:
https://dev.to/asizikov/using-github-container-registry-with-kubernetes-38fb

```sh
cd k8s
./set_env.sh
minikube service k8s-github-package-test-service
```
