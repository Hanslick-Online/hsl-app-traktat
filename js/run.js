var editor = new LoadEditor({
    wr: false,
    up: true,
    lang: {
        title: "Multi Language Support",
        variants: [
          {
            opt: "de",
            title: "DE",
            class: "multi-lang nav-link pointer",
            map: {
              "index-en.html": "index.html",
              "index.html": "index.html",
              "bedeutung-hanslick-engl.html": "bedeutung-hanslick.html",
              "bedeutung-hanslick.html": "bedeutung-hanslick.html",
              "projektgeschichte-engl.html": "projektgeschichte.html",
              "projektgeschichte.html": "projektgeschichte.html",
              "projektziele-engl.html": "projektziele.html",
              "projektziele.html": "projektziele.html",
              "editionsrichtlinien-und-how-to-cite-engl.html": "editionsrichtlinien-und-how-to-cite.html",
              "editionsrichtlinien-und-how-to-cite.html": "editionsrichtlinien-und-how-to-cite.html",
              "einzelvortraege-engl.html": "einzelvortraege.html",
              "einzelvortraege.html": "einzelvortraege.html",
              "publikationen-engl.html": "publikationen.html",
              "publikationen.html": "publikationen.html",
              "team-engl.html": "team.html",
              "team.html": "team.html",
              "veranstaltungen-engl.html": "veranstaltungen.html",
              "veranstaltungen.html": "veranstaltungen.html",
              "search-engl.html": "search.html",
              "search.html": "search.html",
              "imprint.html": "imprint.html",
              "imprint_en.html": "imprint.html",
              "toc.html": "toc.html",
              "toc_en.html": "toc.html"
            },
          },
          {
            opt: "en",
            title: "EN",
            class: "multi-lang nav-link pointer",
            map: {
              "index.html": "index-en.html",
              "index-en.html": "index-en.html",
              "bedeutung-hanslick.html": "bedeutung-hanslick-engl.html",
              "bedeutung-hanslick-engl.html": "bedeutung-hanslick-engl.html",
              "projektgeschichte.html": "projektgeschichte-engl.html",
              "projektgeschichte-engl.html": "projektgeschichte-engl.html",
              "projektziele.html": "projektziele-engl.html",
              "projektziele-engl.html": "projektziele-engl.html",
              "editionsrichtlinien-und-how-to-cite.html": "editionsrichtlinien-und-how-to-cite-engl.html",
              "editionsrichtlinien-und-how-to-cite-engl.html": "editionsrichtlinien-und-how-to-cite-engl.html",
              "einzelvortraege.html": "einzelvortraege-engl.html",
              "einzelvortraege-engl.html": "einzelvortraege-engl.html",
              "publikationen.html": "publikationen-engl.html",
              "publikationen-engl.html": "publikationen-engl.html",
              "team.html": "team-engl.html",
              "team-engl.html": "team-engl.html",
              "veranstaltungen.html": "veranstaltungen-engl.html",
              "veranstaltungen-engl.html": "veranstaltungen-engl.html",
              "search.html": "search-engl.html",
              "search-engl.html": "search-engl.html",
              "imprint.html": "imprint_en.html",
              "imprint_en.html": "imprint_en.html",
              "toc.html": "toc_en.html",
              "toc_en.html": "toc_en.html"
            },
          },
        ],
        active_class: "lang_active",
    }
  });
  