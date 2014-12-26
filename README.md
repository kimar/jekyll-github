## jekyll-github

Jekyll Liquid Tag to show GitHub Stars inside your Jekyll powered static Site / Blog.

For a live example go to [http://src.kida.io](http://src.kida.io).

### Demo

![GIF](http://s.kida.io/jekyll-github-stars.gif)

### Installation

1. Copy `github.rb` into your jekyll `_plugins` directory.
2. Copy `github.js` into your `assets` directory (make sure it gets copied when building the site).

### Usage

Add Liquid Tags to your pages, e.g.:

```
{% github_stars kimar/kiimagepager %}
```

Make sure to include `github.js`, all stars will be loaded after DOM is ready:

```javascript
<script src="/js/github.js" type="text/javascript"></script>
```

### Limitations

* This plugin uses GitHub's Public API which is affected by the 60 reqs / h rate limits. Get [more info here](https://developer.github.com/v3/#rate-limiting).

### ToDo

* (Optionally) use authenticated API to have higher rate limits

### LICENSE
(c) 2014 by Marcus Kida

See [LICENSE.md](LICENSE.md)
