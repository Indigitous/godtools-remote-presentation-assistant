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
    value, display;
    
  languages.forEach(function(language) {
    value = language[0];
    display = language[1].display;
    Presenter.$language_dropdown
      .append($("<option></option>")
      .attr("value", value)
      .text(display)); 
  });

  presentations.forEach(function(presentation) {
    value = presentation[0];
    display = presentation[1].title;
    Presenter.$presentation_dropdown
      .append($("<option></option>")
      .attr("value", value)
      .text(display)); 
  });  
}

Presenter.initialize = function() {
  Presenter.current_presentation = 'kgp';
  Presenter.current_page = 0;
  Presenter.current_language = 'en';
  Presenter.$language_dropdown = $('#language_list');
  Presenter.$presentation_dropdown = $('#presentation_list');
  Presenter.$presentation_link = $('#presentation_link');

  var $next_btn = $('#next_btn'),
    $prev_btn = $('#prev_btn'),
    $load_btn = $('#load_btn');

  Presenter.populate_dropdowns();

  $load_btn.on('click', function() {
    Presenter.current_page = '';
    Presenter.current_presentation = Presenter.$presentation_dropdown.val();
    Presenter.current_language = Presenter.$language_dropdown.val();
    $next_btn.show();
    Presenter.set_url();
  })

  $next_btn.on('click', function() {
    var cur_pres = Presenter.presenter_data.presentations[Presenter.current_presentation];
    if (Presenter.current_page < cur_pres.num_pages) {
      ++Presenter.current_page;
      $prev_btn.show();
      if (Presenter.current_page == cur_pres.num_pages) {
        $next_btn.hide();
      }
      Presenter.set_url();
    }
  })

  $prev_btn.on('click', function() {
    var cur_pres = Presenter.presenter_data.presentations[Presenter.current_presentation];
    if (Presenter.current_page > 0) {
      --Presenter.current_page;
      $next_btn.show();
      if (Presenter.current_page == 0) {
        $prev_btn.hide();
        Presenter.current_page = '';
      }
      Presenter.set_url();
    }
  })
}

Presenter.set_url = function(url) {
  Presenter.$presentation_link.text('http://knowgod.com/' + Presenter.current_language + '/' + Presenter.current_presentation + '/' + Presenter.current_page);
}