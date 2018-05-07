## NOTICE

[Dominic Szablewski's](http://phoboslab.org/) [ImpactJS Game Engine](http://impactjs.com/) was released under [MIT](LICENSE) license recently, and I felt its biggest disadvantage was its PHP usage for the level editor, Weltmeister.  Searching GitHub revealed some old work by [cpetzold](https://github.com/cpetzold/node-impact). Starting there, I was able to develop a better GETTING STARTED flow, I think...

# ImpactJS

> An HTML5 Game Engine

Impact is a JavaScript Game Engine that allows you to develop stunning HTML5 Games for desktop and mobile browsers.

- More info at: http://impactjs.com/
- Documents at: http://impactjs.com/documentation
- Various example games to get you started are available on http://impactjs.com/download

**Features**

- Play Everywhere (browser, mobile)
- Flexible Level Editor for Anything 2D
- Publish your Games into the AppStore with almost native performance 
- Powerful Debug Tools
- Get Started in Minutes

## Getting Started

This will get everything up-and-running via [NodeJS](https://nodejs.org/en/)

1. [Download ZIP](https://github.com/n2geoff/Impact/archive/master.zip) from github
2. Extract to a folder you want to develop in
3. open Terminal and navigate to the extracted files
4. run `npm install`
5. run `npm start`

Your game files are stored in the `/src/public/lib/game/` folder, you can point your text editor here.

To see your game running, navigate your browser here: `http://localhost:8080`

To see the game editor, navigate your browser to: `http://localhost:8080/weltmeister.html`

For everything else, check out [impact.js.com]( http://impactjs.com/)

## TODO

- Lots of cleanup
- gulp build process for minify/bake
- check we can include Docs here?

> NOTE: php (tools) is currently required to build your game for distribution

## Support

You can open [an issue](https://github.com/n2geoff/impact/issues/new) for support, however my goal is just to run ImpactJS under node.  For ImpactJS engine features please use the original github repository issues [found here](https://github.com/phoboslab/Impact/issues), thanks!

## Contributing

Anyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md), there minimalistic;)

## License

[MIT](LICENSE)

> NOTE: Impact's level editor uses jQuery which comes with its own license.
