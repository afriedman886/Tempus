# Tempus Patient Portal

This app provides doctors and patients at Tempus with a simple portal with which to share patient information and view/schedule appointments.

## Setup
1. ``git clone https://github.com/afriedman886/Tempus.git``
2. ``cd Tempus``
3. ``npm install``
4. ``seed``
5. ``node server.js``

After cloning the git file, navigate to the project directory (Tempus). Once inside, run ``npm install`` to install all dependencies. Seed the database with sample data by running ``seed``. Start the development server by running ``node server.js``.

View the app at ``http://localhost:1337``

## Notes

While this app is not fully functional, the following url paths can be viewed manually:
-  ``http://localhost:1337/patients`` : JSON object showing the collection of all patients
-  ``http://localhost:1337/patients/:patientId`` : JSON object showing the patient details of the patient whose ``_id `` is specified in the file path
-  ``http://localhost:1337/login`` : Login screen, with styling, that unfortunately doesn't seem to be authorizing passwords properly.  To view the "invalid password" error message, feel free to try loggin in with ``username: patient`` and ``password: password``


