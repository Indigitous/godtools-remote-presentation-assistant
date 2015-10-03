Presenter.presenter_data = {
  languages: [
    ['en', 'English'],
    ['af', 'Afrikaans'],
    ['id', 'Bahasa Indonesia (Indonesian)'],
    ['ms', 'Bahasa Melayu (Malay)'],
    ['et', 'Eesti (Estonian)'],
    ['es', 'Español; Castellano (Spanish; Castilian)'],
    ['sw', 'Kiswahili (Swahili)'],
    ['lt', 'Lietuvių (Lithuanian)'],
    ['nso', 'Northern Sotho'],
    ['pt', 'Português (Portuguese)'],
    ['ro', 'Română (Romanian)'],
    ['sq', 'Shqip (Albanian)'],
    ['vi', 'Tiếng Việt (Vietnamese)'],
    ['tr', 'Türkçe (Turkish)'],
    ['tgl', 'Wikang Tagalog (Tagalog)'],
    ['sn', 'chiShona (Shona)'],
    ['fr', 'français (French)'],
    ['hu', 'magyar (Hungarian)'],
    ['pl', 'polski (Polish)'],
    ['sk', 'slovenčina (Slovak)'],
    ['cs', 'čeština (Czech)'],
    ['el', 'Ελληνικά (Greek, Modern (1453-))'],
    ['bg', 'Български (Bulgarian)'],
    ['mk', 'Македонски (Macedonian)'],
    ['mn-mn', 'Монгол (Mongolian)'],
    ['ru', 'русский (Russian)'],
    ['uk', 'українська (Ukrainian)'],
    ['hy', 'Հայերեն (Armenian)'],
    ['ar', 'العربية (Arabic)'],
    ['ta', 'தமிழ் (Tamil)'],
    ['te-in', 'తెలుగు (Telugu)'],
    ['si', 'සිංහල (Sinhala; Sinhalese)'],
    ['th', 'ไทย (Thai)'],
    ['bo', 'བོད་ཡིག (Tibetan)'],
    ['am-et', 'አማርኛ (Amharic)'],
    ['zh', '汉语 (Chinese)'],
    ['zh-tw', '漢語 (Chinese)'],
    ['ko', '한국어 (Korean)']
  ],
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
  var languages = Presenter.presenter_data.languages,
    presentations = _.pairs(Presenter.presenter_data.presentations),
    value, display;
    
  languages.forEach(function(language) {
    value = language[0];
    display = language[1];
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
  Presenter.current_presentation = Presenter.session_data.current_presentation || 'kgp';
  Presenter.current_page = Presenter.session_data.current_page || '';
  Presenter.current_language = Presenter.session_data.current_language || 'en';
  Presenter.current_presentation_data = Presenter.presenter_data.presentations[Presenter.current_presentation];
  Presenter.$language_dropdown = $('#language_list');
  Presenter.$presentation_dropdown = $('#presentation_list');
  Presenter.$presentation_link = $('#presentation_link');
  Presenter.$presentation_link.text(Presenter.session_data.knowgod_url);

  var $next_btn = $('#next_btn'),
    $prev_btn = $('#prev_btn'),
    $load_btn = $('#load_btn');

  Presenter.populate_dropdowns();

  $load_btn.on('click', function() {
    Presenter.current_page = '';
    Presenter.current_presentation = Presenter.$presentation_dropdown.val();
    Presenter.current_language = Presenter.$language_dropdown.val();
    Presenter.current_presentation_data = Presenter.presenter_data.presentations[Presenter.current_presentation];
    $next_btn.show();
    Presenter.send_session();
  });

  $next_btn.on('click', function() {
    var cur_pres = Presenter.current_presentation_data;
    if (Presenter.current_page < cur_pres.num_pages) {
      ++Presenter.current_page;
      $prev_btn.show();
      if (Presenter.current_page == cur_pres.num_pages) {
        $next_btn.hide();
      }
      Presenter.send_session();
    }
  });

  $prev_btn.on('click', function() {
    var cur_pres = Presenter.current_presentation_data;
    if (Presenter.current_page > 0) {
      --Presenter.current_page;
      $next_btn.show();
      if (Presenter.current_page == 0) {
        $prev_btn.hide();
        Presenter.current_page = '';
      }
      Presenter.send_session();
    }
  });

  // Initialize next and previous buttons.
  Presenter.current_page != '' && (Presenter.current_page < Presenter.current_presentation_data.num_pages) ? $next_btn.show() : $next_btn.hide();
  Presenter.current_page > 0 ? $prev_btn.show() : $prev_btn.hide();

  viewer_url = viewer_url + '?session_id=' + session_id;
  $('#viewer_link').val(viewer_url);

  new Clipboard('#copy_viewer_link_button');

  $('<iframe src="' + viewer_url + '" height="900" width="768" frameborder="0" allowfullscreen=""></iframe>').appendTo($('html'));  
}

Presenter.send_session = function() {
  var url = 'http://knowgod.com/' + Presenter.current_language + '/' + Presenter.current_presentation + '/' + Presenter.current_page;

  Presenter.session_data.current_presentation = Presenter.current_presentation || 'kgp';
  Presenter.session_data.current_page = Presenter.current_page || '';
  Presenter.session_data.current_language = Presenter.current_language || 'en';
  Presenter.session_data.knowgod_url = url;
  send_data();
  Presenter.$presentation_link.text(url);
}