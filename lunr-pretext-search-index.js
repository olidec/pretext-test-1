var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "chapter-1",
  "level": "1",
  "url": "chapter-1.html",
  "type": "Chapter",
  "number": "1",
  "title": "Getting Started",
  "body": " Getting Started  Welcome to PreTeXt!   "
},
{
  "id": "chapter-2",
  "level": "1",
  "url": "chapter-2.html",
  "type": "Chapter",
  "number": "2",
  "title": "My Own Chapter",
  "body": " My Own Chapter                  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "chapter-2.html#exercise-1",
  "type": "Checkpoint",
  "number": "2.0.1",
  "title": "",
  "body": "            "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
