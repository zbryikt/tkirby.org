require! <[fs path pug stylus marked]>

root = __dirname
src-pug  = "#root/src/pug"
src-html = "#root/src/pug/html"
src-p    = "#root/src/pug/p"
out-blog = "#root/static/blog"

stylus-filter = (s, opts) ->
  out = ''
  stylus(s).render (err, css) -> out := css or ''
  out

pug-opts = (file) ->
  filename: file
  basedir: src-pug
  filters: { stylus: stylus-filter, md: (s) -> marked.parse s }

# ensure output dir exists
mkdirp = (dir) ->
  if !fs.exists-sync dir => fs.mkdir-sync dir, {recursive: true}

# 1a. build index.pug -> static/index.html
build-home = ->
  file = "#src-pug/index.pug"
  html = pug.render-file file, (pug-opts file)
  fs.write-file-sync "#root/static/index.html", html
  console.log "built: static/index.html"

# 1b. build blog/index.pug -> static/blog/index.html
build-index = ->
  file = "#src-pug/blog/index.pug"
  html = pug.render-file file, (pug-opts file)
  mkdirp out-blog
  fs.write-file-sync "#out-blog/index.html", html
  console.log "built: static/blog/index.html"

# 2. collect all post IDs
collect-ids = ->
  ids = {}
  # from src/pug/html/*.html
  if fs.exists-sync src-html
    for f in fs.readdir-sync src-html
      m = /^(\d+)\.html$/.exec f
      if m => ids[m.1] = true
  # from src/pug/p/*/index.pug
  if fs.exists-sync src-p
    for d in fs.readdir-sync src-p
      if fs.exists-sync "#src-p/#d/index.pug" => ids[d] = true
  Object.keys ids

# 3. build one post
build-post = (id) ->
  out-dir = "#out-blog/#id"
  mkdirp out-dir
  pug-file = "#src-p/#id/index.pug"
  html-file = "#src-html/#id.html"
  if fs.exists-sync pug-file
    html = pug.render-file pug-file, (pug-opts pug-file)
    fs.write-file-sync "#out-dir/index.html", html
    console.log "built (pug): static/blog/#id/index.html"
  else if fs.exists-sync html-file
    content = fs.read-file-sync html-file .to-string!
    base = "#src-pug/base.pug"
    html = pug.render-file base, ({html: content} <<< (pug-opts base))
    fs.write-file-sync "#out-dir/index.html", html
    console.log "built (html): static/blog/#id/index.html"
  else
    console.warn "skip #id: no source found"

# main
build-home!
build-index!
ids = collect-ids!
console.log "building #{ ids.length } posts..."
for id in ids => build-post id
console.log "done."
