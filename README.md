github package test

prerequisites:

- docker
- python3.11
- minikube
- kubectl

.dockerconfigjson:
https://dev.to/asizikov/using-github-container-registry-with-kubernetes-38fb

nginx
https://levelup.gitconnected.com/packaging-front-end-react-applications-under-a-production-environment-with-vite-and-nginx-in-docker-7e2739bc0494

```sh
cd k8s
./set_env.sh
minikube service k8s-github-package-test-service
```
