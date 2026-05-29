t1 = Date.now!
require! <[fs template]>

# try using packages such as yargs?
if /\.json$/.exec(process.argv.2 or '') => cfgfile = process.argv.2
if !cfgfile => cfgfile = 'config.json'

static-mode = process.argv.index-of('--static') >= 0
help-mode   = process.argv.index-of('--help') >= 0 or process.argv.index-of('-h') >= 0

api = (server) ->
  server.app.get \/blog/, (req, res, next) ->
    if !req.query.p => res.render 'index.pug'
    if !/^(\d{2,5})+$/.exec(req.query.p) => return res.send!
    file = "src/pug/html/#{req.query.p}.html"
    if !fs.exists-sync(file) => return res.status(404).send!
    html = fs.read-file-sync file .toString!
    res.render 'base.pug', {html}
    return null

main = do
  opt: {port: 9204, api, start-time: t1}
  set-opt: (o) -> @opt <<< o
  init: ->
    template.server.init @opt
    template.watch.init @opt

if require.main == module =>
  if help-mode
    console.log """
    Usage: lsc server.ls [options]

    Options:
      --static    Serve static/ directory directly (no pug rendering)
      --help, -h  Show this help message
    """
    process.exit 0
  else if static-mode
    require! <[express]>
    port = 9204
    app = express!
    app.use express.static('static')
    app.listen port, -> console.log "static server on port #port"
  else
    if fs.exists-sync(cfgfile) =>
      config = JSON.parse(fs.read-file-sync cfgfile .toString!)
      main.set-opt config
    main.init!

module.exports = main

