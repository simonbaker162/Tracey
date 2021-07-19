If you want to change a theme's colour (or if new tabs are being added and therefore new themes are being implemented):


1) MARKUP: In index.html, set the data-theme-hex property to the hex value of your chosen colour for the div element that represents the tab of the form you are changing or adding a theme for:

<div class="tab names-tab" id="namesFormTab" data-theme-hex="#85b0ff">Names</div>

The changeTheme() function in theme.js uses the data-theme-hex attribute of the tab to change the 


2) STYLING: In base.css, change the background colour property for the relevant tab and form classes (e.g. ".names-tab" and ".names-form").

 .names-tab {
    background-color: #85b0ff;
  }

  .names-form {
    background-color: #85b0ff;
  }


3) IMAGE: Generate a new SVG image to match your new theme. The image used in the project currently can be accessed at https://undraw.co/search using the keywords 'true friends' and easily downloaded to match your new theme by inputting your chosen theme's colour hex value. If you find that the resource is no longer available, then you can modify one of the existing SVGs saved in the /img folder of the project.

Once you have your correctly coloured SVG, include it in index.html as an img element as a direct child of the container div (first child of the body element). The project's Javascript will take care of changing to your new theme when you access that tab.





app.js

The main script for the project.

The createForm() function instantiates a new Form object from the Form class, configured according to the (type) argument passed to the constructor. The constructor calls the initForm() method found on the class to append the relevant markup to the DOM when a new Form is instantiated.

On initial page load, the init() function is called, which calls both createForm() and changeTheme() with (type) arguments of "names" to set the names form and its associated themes as the defaults which will display on page load. 