Presenter.presenter_data = {
  languages: {
    en: {
      display: 'English'
    },
    fr: {
      display: 'français'
    }
  },
  presentations: {
    kgp: {
      title: 'Knowing God Personally',
      num_pages: 12
    },
    fourlaws: {
      title: 'The Four Spiritual Laws',
      num_pages: 10
    },
    satisfied: {
      title: 'Satisfied?',
      num_pages: 7
    }
  }
}

Presenter.populate_dropdowns = function() {
  var languages = _.pairs(Presenter.presenter_data.languages),
    presentations = _.pairs(Presenter.presenter_data.presentations),
    $language_dropdown = $('#presentation_list'),
    $presentation_dropdown = $('#language_list'),
    value, display;
    
  languages.forEach(function(language) {
    value = language[0];
    display = language[1].display;
    $language_dropdown
      .append($("<option></option>")
      .attr("value", value)
      .text(display)); 
  });

  presentations.forEach(function(presentation) {
    value = presentation[0];
    display = presentation[1].title;
    $presentation_dropdown
      .append($("<option></option>")
      .attr("value", value)
      .text(display)); 
  });  
}