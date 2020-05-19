t1 = Date.now!
require! <[fs template]>

# try using packages such as yargs?
if /\.json$/.exec(process.argv.2 or '') => cfgfile = process.argv.2
if !cfgfile => cfgfile = 'config.json'

api = (server) ->
  server.app.get \/blog/, (req, res, next) ->
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
  if fs.exists-sync(cfgfile) =>
    config = JSON.parse(fs.read-file-sync cfgfile .toString!)
    main.set-opt config
  main.init!

module.exports = main

