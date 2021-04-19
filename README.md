[Setting this up is JUST 3 STEPS. I wanted to start by mentioning that with that as a lot of this README just explains what this tool is. SKIP TO SETUP, if you want to jump right to it.](#setup)

### WHAT IS THIS CODE???
This is a small stack built on webpack which can be used to quickly builds styles and javascript. Typical webpack server stack.  The folder structure, however has been modelled after the paradigms used in the full Brightspot stack, which should help in providing knowledge should the switch to the full brightspot stack occur later in the future.

### SO WHAT IS MISSING HERE THAT IS TYPICALLY IN BRIGHTSPOT
Well, a lot *BUT* at the same time, *not a lot*... Let me explain. The whole point of the *Brightspot Go* approach, is that you already have a predefined foundation, fully built and ready to go. This therefore, excludes the tools that make building that foundation simple. But thats ok!. We just want to style unique details and features on top that foundation. This therefore focuses on making adding CSS styles, and javascript as painless and easy as possible.

### SO IN SUMMARY WHAT DOES THIS DO
It generates the CSS and javascript... The real beauty of this is that it packs the same exact CSS media query breakpoints and folder structure as the full fledged version of brightspot. This means internally your team can have a very organized and structured setup for extending the *Brightspot Go* theme. After Running this, checkout the [Tips and Tricks](#tips-and-tricks) for some cool ways of speeding the workflow.

# Setup 
#### (Installation only, See [Running](#running) section below for usage instructions)
We use [Yarn](https://yarnpkg.com/) to manage JS packages, so you should make sure that's installed first. Most of us also use [Visual Studio Code](https://code.visualstudio.com/) as the IDE, and if you run into any issues, you're more likely to get help with troubleshooting if you use it. But if you're more comfortable using some other tool, feel free. Just make sure that you still follow all the code formatting rules.

1. Download this repository, or clone it locally 
2. Go to  that folder and on the terminal run `yarn install`
3. (in case you cannot run yarn lets make sure you have all the prerequisites install, but Step 2 will most likely be the final step)

# Prerequisites
Minimum Requirements
```
$ yarn --version
1.9.4
$ node -v
v8.11.3
```

Tested also on latest version built into most macs 
```
$ yarn --version
1.10.1
$ node -v
v12.0.0
```

# Running 
* So the [Setup](#setup) was merely running `yarn install`, running it is equally simple.
* To build the CSS and JS files run `yarn build`
* To both  build the CSS and JS files and have them update in realtime to changes, run `yarn server`

# Tips and tricks
* As an user of the CMS if you go to a site. Then once on the *Edit Site* view, you go to the *Front End* tab. Scrolling all the way to the bottom you'll see an area titled *Custom Scripts And Styles*. 
  * In the *Custom Scripts And Styles* you can then add custom CSS and javascript inline, or point to a separate file. 
  * Rather than using inline, lets point to a separate file. During development, run `yarn server`, and go to `http://localhost:9000` where you will get a CSS url, and a JS url. Use those, which will allow you to keep making changis using this stack and seeing them immediately.

* Another alternative is to point to your modified|extended (however you may want to call it) production css and js files. Using the [following workflow linked herein](https://medium.com/requestly-docs/chrome-extensions-for-redirecting-urls-redirector-requestly-switcheroo-d9870ba77c22) you can load your local file as you keep doing development. Long story short youll make your browser load your local file whenever it is supposed to load the production file.  Outside of your browser production will be unaffected, thus its a great way to keep extending the *Brightspot Go* theme.   

* We have provided some nice utilities that make animations and things here in extending the core BSP-go theme. Documentation below.

# Info on important files and folders
* */dist/* - this folder includes the built css and js files. These are the files you can push to server, or which have the code youd want to paste into *CMS*
* */less/index.less & index.js* - these are the main js and css files. In them you can include all individually separate js and css snippets|scripts that will make up your *Brightspot Go* theme extensions.

## Some of the provided JS bits
Pretty much for all js, loading them at DOMContentLoaded is recommended unless its functionality you can delay further (onload).
* Documentation on these are available at the top of the javascript files.
* *addThis* - appends addThis script integration on matching pages
* *moduleInViewObserver* - this one is useful as it allows certain modules to know when they are in view. Right now these are used to provide animations as modules come into view
* *navigationOnLead* - allows navigation to go transparent when it overlaps certain leads

## Some of the provided CSS bits
Structure follows the same paradigms as the *Brightspot Go* theme thus we can be sure the breakpoints are the same for example, as well as the rules used to target modules and such
* *global/Animations* - Includes a list of animations
* *global/MediaQueries* - *Very important* file to become familiar with. It has the exact same media query declarations used by the core theme. Thus making changes done here in super easy to align to what the core theme is doing
* *global/Typography* - *Very important* file to become familiar with. It shows in a comment the typographic variables controlling the sizes  for all typography styles in the core *Brightspot Go* theme. This then become a neat centralized spot for overriding all of those styles.
* *global/Module* - *Very important* file to become familiar with. In the core *Brightspot Go* theme. This file defines how all modules should pad, and space such that all modules are consistent. The rule for that pretty much is `[data-modulewell] > [data-module]`.  This file therefore is where can also make global changes that target every module. In our case this is being used to apply animations to ALL modules following that same css rule, as they come into view (Works with the help of js file *moduleInViewObserver*)
