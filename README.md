Emocial (Frontend)
=======
This repository is the web interface to an application that analyzes short messages for a chance of depression.

Setup
-----------
You have to have this repository and [the backend repository](https://github.com/Emocial-NLP-Depression-Detection/Emocial-backend-API) cloned. To clone the backend repository, open a new folder and a new terminal for that folder, and enter the following command.

```
git clone https://github.com/Emocial-NLP-Depression-Detection/Emocial-backend-API.git
```

For the first time hosting the frontned, enter the following command in the frontend terminal. Make sure you are in the Emocial-Frontend directory.

```
npm install react
```

Information on how to setup the backend can be found in [this README](https://github.com/Emocial-NLP-Depression-Detection/Emocial-backend-API/blob/main/README.md) from the backend repository.

Hosting Emocial
-----------

You need to start the backend **and** the frontend to host Emocial.

To start the frontend, enter the following command in the frontend terminal.

```
npm start
```

To start the backend, enter the following command in the backend terminal. Make sure you are in the Emocial-backend-API directory.

```
python manage.py runserver
```

The web application will be available locally on http://localhost:3000. Make sure http://localhost:8000 is available for the backend to run.

Although it has no confirmed effect on the website performance, having bananas while running the web application is highly recommended.