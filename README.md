## NOTICE

[Dominic Szablewski's](http://phoboslab.org/) [ImpactJS Game Engine]() was released under [MIT](LICENSE) license recently, and I felt the biggest disadvantage its PHP usage for its level editor, Weltmeister.  Searching GitHub revealed some old work by [cpetzold](https://github.com/cpetzold/node-impact).  I updated that work and now I think it is much easier to GET STARTED

# ImpactJS

> An HTML5 Game Engine

Impact is a JavaScript Game Engine that allows you to develop stunning HTML5 Games for desktop and mobile browsers.

- More info & documentation: http://impactjs.com/
- Various example games to get you started are available on http://impactjs.com/download

**Features**

- Play Everywhere (browser, mobile)
- Flexible Level Editor for Anything 2D
- Publish your Games into the AppStore with almost native performance 
- Powerful Debug Tools
- Get Started in Minutes

## Get Started

This will get everything up-and-running via [NodeJS](https://nodejs.org/en/)

1. [Download ZIP](https://github.com/n2geoff/Impact/archive/master.zip) from github
2. Extract to a folder you want to develop in
3. open Terminal and navigate to the extracted files
4. run `npm install`
5. run `npm start`

Your game files are stored in the `/game/lib/game/` folder, you can point your text editor here. *I know that is crazy*

To see your game running, navigate your browser here: `http://localhost:8080`

To see the game editor, navigate your browser to: `http://localhost:8080/weltmeister.html`

For everything else, check out [impact.js.com]( http://impactjs.com/)

## TODO

- Lots of cleanup
    - move directories around
    - cleanup express
- gulp build process for minification/bake
- Check if I can bring Docs here?

## Support

You can open [an issue](https://github.com/n2geoff/impact/issues/new) for support, however my goal is just to run under node.  For engine features please use the original github repository issues [found here](https://github.com/phoboslab/Impact/issues) 

## Contributing

Anyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md), there minimalistic;)

## License

[MIT](LICENSE)

> NOTE: Impact's level editor uses jQuery which comes with its own license.
